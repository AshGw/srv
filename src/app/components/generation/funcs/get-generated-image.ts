import env from '@/lib/env';

export const ErrorStatusCode = {
  BAD_REQUEST: 400,
  BAD_FETCH: 500,
  PROXY: 502,
  THIRD_PARTY: 503,
};

export type ErrorFetch = {
  statusCode: number;
  errorMessage: string;
};

export function isBadFetch(obj: any): obj is ErrorFetch {
  return (
    typeof obj === 'object' && 'statusCode' in obj && 'errorMessage' in obj
  );
}

export async function getImage(
  prompt: string,
  raw: boolean
): Promise<Blob | ErrorFetch | undefined> {
  try {
    let res = await fetch(
      env.public.URLs.MCS + `/generate/free/?enhance=${!raw}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // do not forget the spacing for Bearer
          Authorization: 'Bearer' + ' ' + env.public.ClientTestTokens.FREE, // will be auto set with the session
        },
        body: JSON.stringify({ prompt: prompt }),
      }
    );

    if (res.status == ErrorStatusCode.PROXY) {
      // This should not happen G, well at least 99.99% of the time
      return {
        statusCode: ErrorStatusCode.PROXY,
        errorMessage: 'Proxy down, server went dark',
      };
    }

    if (res.status == ErrorStatusCode.THIRD_PARTY) {
      // Something went wrong with a 3rd party service
      return {
        statusCode: ErrorStatusCode.THIRD_PARTY,
        errorMessage: 'Something went wrong with a 3rd party service',
      };
    }

    const contentType = res.headers.get('content-type');
    if (
      contentType &&
      contentType.includes('application/json') &&
      res.status == 200
    ) {
      // Cannot request a base64 encoded message from the browser
      // API users can doe it's available for everyone
      return {
        statusCode: ErrorStatusCode.BAD_REQUEST,
        errorMessage:
          'Bad request from the client. Image should not be encoded',
      };
    } else if (contentType && contentType.includes('image/jpeg')) {
      // success

      const blob = await res.blob();
      return blob;
    }
    throw new Error(
      'Unexpected response from the server, Probable server down'
    );
  } catch (error) {
    // Unexpected but it can happen
    return {
      statusCode: ErrorStatusCode.BAD_FETCH,
      errorMessage: `Error occured while fetching: ${error}`,
    };
  }
}
