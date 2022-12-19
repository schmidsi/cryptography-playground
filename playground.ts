const message = "Hello World";

function incrementChar(c: String, by: number) {
  return String.fromCharCode(c.charCodeAt(0) + by);
}

// https://en.wikipedia.org/wiki/Caesar_cipher
function cesarEncrypt(msg: string, key: number) {
  const chars = msg.split("");
  const incrementChars = chars.map((char) => incrementChar(char, key));
  return incrementChars.join("");
}

function cesarDecrypt(msg: string, key: number) {
  const chars = msg.split("");
  const incrementChars = chars.map((char) => incrementChar(char, -key));
  return incrementChars.join("");
}

console.log(cesarEncrypt(message, 2));

console.log(cesarDecrypt('Jgnnq"Yqtnf', 2));

/**
 * Symmetric encription means:
 * - Message and ecrypted have same length
 * - Both parties have the same secret key
 */
