import { publicKey } from '@/app/jwk';
import { exportJWK } from 'jose';

export async function GET() {
  const publicJwk = await exportJWK(publicKey);
  return new Response(JSON.stringify(
    {
      "keys": [
        {
          "use": "sig",
          "kid": "1",
          "alg": "RS256",
          ...publicJwk
        }
      ]
    }
  ), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}