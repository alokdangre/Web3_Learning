import { generateMnemonic, mnemonicToSeedSync} from 'bip39'

const mnemonic = generateMnemonic();

console.log("Generated Mnemonic : ", mnemonic);

const seed = mnemonicToSeedSync(mnemonic);

console.log(seed)

// Derivation paths specify a systematic way to derive various keys from the master seed.
// They allow users to recreate the same set of addresses and private keys from the seed across different wallets, ensuring interoperability and consistency. (for example if you ever want to port from Phantom to Backpack)

// A derivation path is typically expressed in a format like m / purpose' / coin_type' / account' / change / address_index.
// m: Refers to the master node, or the root of the HD wallet.
// purpose: A constant that defines the purpose of the wallet (e.g., 44' for BIP44, which is a standard for HD wallets).
// coin_type: Indicates the type of cryptocurrency (e.g., 0' for Bitcoin, 60' for Ethereum, 501' for solana).
// account: Specifies the account number (e.g., 0' for the first account).
// change: This is either 0 or 1, where 0 typically represents external addresses (receiving addresses), and 1 represents internal addresses (change addresses).
// address_index: A sequential index to generate multiple addresses under the same account and change path

import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}