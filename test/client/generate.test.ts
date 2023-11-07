import { getImage, isBadFetch, ErrorFetch} from '@/app/components/generation/funcs/get-generated-image';

const PROMPT = 'a landscape of '
const IS_RAW = true 
describe('getImage function', () => {
  test('should return a Blob image upon successful image generation or an ErrorFetch return type upon failure', async () => {
    const result = await getImage(PROMPT, IS_RAW);
    const badFetch = isBadFetch(result);

    if (badFetch) {
      expect(result).toMatchObject<ErrorFetch>(result);
      return; 
    }
    if (!badFetch) {
      // if not above then it must be successful & should return a blob image
      expect(result).toBeInstanceOf(Blob);
      return; 
    }
  },100_000); // 100 seconds as max timeout
});
