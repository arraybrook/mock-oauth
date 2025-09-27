import { generateKeyPair, importJWK, CryptoKey } from 'jose';

export let publicKey: CryptoKey | Uint8Array<ArrayBufferLike>;
export let privateKey: CryptoKey | Uint8Array<ArrayBufferLike>;

if (process.env.JWK_PUBLIC_KEY != undefined && process.env.JWK_PRIVATE_KEY != undefined) {
  publicKey = await importJWK(
    JSON.parse(process.env.JWK_PUBLIC_KEY),
    "RS256"
  );

  privateKey = await importJWK(
    JSON.parse(process.env.JWK_PRIVATE_KEY),
    "RS256"
  );
} else {
  const keyPair = await generateKeyPair('RS256', {
    modulusLength: 2048, // recommended key size
    extractable: true,
  });
  publicKey = keyPair.publicKey
  privateKey = keyPair.privateKey
}