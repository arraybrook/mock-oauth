import { generateKeyPair } from 'jose';

export const { publicKey, privateKey } = await generateKeyPair('RS256', {
  modulusLength: 2048, // recommended key size
  extractable: true,
});