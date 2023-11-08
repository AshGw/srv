import { gmailParser, isGmail } from '@/lib/funcs/reusables/gmail-parser';

describe('gmailParser function', () => {
  test('should parse Gmails correctly', () => {
    const inputEmail = 'jo..hn.doe@gmail.com';
    const expectedOutput = 'johndoe@gmail.com';
    const result = gmailParser(inputEmail);
    expect(result).toBe(expectedOutput);
  });
});

describe('isGmail function', () => {
  test('should return true if a given email is Gmail', () => {
    const actualGmail = 'john.doe@gmail.com';
    const result = isGmail(actualGmail);
    expect(result).toBe(true);
  });

  test('should return false for non-Gmail email', () => {
    const fakeAhhGmail = 'john.doe@notgmail.com';
    const result = isGmail(fakeAhhGmail);
    expect(result).toBe(false);
  });
});
