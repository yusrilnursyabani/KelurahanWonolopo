import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET_STRING = process.env.JWT_SECRET || "super-secret-key-kelurahan-wonolopo-2026";
const secretKey = new TextEncoder().encode(JWT_SECRET_STRING);

export const ADMIN_COOKIE_NAME = "admin_token";

export async function signAdminToken(): Promise<string> {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);

  return token;
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload.role === "admin";
  } catch {
    return false;
  }
}
