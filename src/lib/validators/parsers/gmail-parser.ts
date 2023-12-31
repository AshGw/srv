/*
  Parses a given Gmail by removing dots from the local part.
  The purpose  of this function is to not fall for the infinite gmail glitch.
  @param {string} email - The Gmail email address to parse.
  @returns {string} - The parsed Gmail email address.
*/
export function gmailParser(email: string): string {
  const [localPart, domain] = email.split('@');

  const parsedLocalPart = localPart.replace(/\./g, '');

  return `${parsedLocalPart}@${domain}`;
}

export function isGmail(email: string): boolean | undefined {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
  return gmailRegex.test(email);
}
