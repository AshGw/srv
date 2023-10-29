import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { value } = await req.json();
    let res = await fetch('https://jolly-still-lark.ngrok-free.app/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer f8ae9e72a17052cee5bffb816fc724e3b9273c02e3f3483a95df4e98a9cce2b2',
      },
      body: JSON.stringify({ prompt: value }),
    });

    if (!res.ok) {
      return new NextResponse(
        JSON.stringify('some error happened on the second server'),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await res.json();
      return data;
    } else if (contentType && contentType.includes('image/jpeg')) {
      const blob = await res.blob();
      return new NextResponse(blob, {
        headers: { 'Content-Type': 'image/jpeg' },
      });
    }
  } catch (error) {
    return new NextResponse(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
