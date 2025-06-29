// Using @nodes/ed25519
// generating solana EdDSA --> Edwards-curev Digital Signature Algorithm

import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random private key
  const privKey = ed.utils.randomPrivateKey();

  // Convert the message "hello world" to a Uint8Array
  const message = new TextEncoder().encode("hello world");

  // Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  // Sign the message
  const signature = await ed.signAsync(message, privKey);

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  // Output the result
  console.log(isValid); // Should print `true` if the signature is valid
}

main();

// studyurl ->  https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-6

// notion --> https://www.notion.so/Frontend-vs-Backend-HTTP-Servers-219d8456a52a81ac98ded0f073d91665
