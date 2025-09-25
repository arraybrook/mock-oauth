import { privateKey } from '@/app/jwk';
import { SignJWT } from 'jose';

export async function POST(request: Request) {
  const body = await request.json();
  const { 
    iss, 
    sub, 
    aud, 
    scope,
    gty,
    azp, 
    name, 
    given_name, 
    family_name, 
    middle_name, 
    nickname, 
    preferred_username, 
    profile,
    picture,
    website,
    email,
    email_verified,
    gender,
    birthdate,
    zoneinfo,
    locale,
    phone_number,
    phone_number_verified,
    address,
    updated_at
  } = body;

  const accessTokenClaims = {
    "iss": iss || "https://mock-oauth.arraybrook.com/",
    "sub": sub,
    "aud": aud || ["com.arraybrook.mock-oauth"],
    "scope": scope,
    "gty": gty,
    "azp": azp,
  };

  // https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
  const idTokenClaims = {
    "name": name,
    "given_name": given_name,
    "family_name": family_name,
    "middle_name": middle_name, 
    "nickname": nickname, 
    "preferred_username": preferred_username, 
    "profile": profile,
    "picture": picture,
    "website": website,
    "email": email,
    "email_verified": email_verified,
    "gender": gender,
    "birthdate": birthdate,
    "zoneinfo": zoneinfo,
    "locale": locale,
    "phone_number": phone_number,
    "phone_number_verified": phone_number_verified,
    "address": address,
    "updated_a": updated_at,
    "iss": iss || "https://mock-oauth.arraybrook.com/",
    "sub": sub,
    "aud": aud || ["com.arraybrook.mock-oauth"],
  };
 
  const accessToken = await new SignJWT(accessTokenClaims)
    .setProtectedHeader(
      { 
        "alg": "RS256", 
        "kid": "1",
      }
    )
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(privateKey);

  const idToken = await new SignJWT(idTokenClaims)
    .setProtectedHeader(
      { 
        "alg": "RS256", 
        "kid": "1",
      }
    )
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(privateKey);
 
  return new Response(
    JSON.stringify(
      {
        "access_token": accessToken,
        "id_token": idToken,
        "scope": scope,
        "expires_in": 3600,
        "token_type": "Bearer"
      }
    ), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}