interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export function checkRateLimit(
  ip: string,
  maxAttempts = 5,
  windowMs = 15 * 60 * 1000
): { isLimited: boolean; remainingMs: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    return { isLimited: false, remainingMs: 0 };
  }

  if (entry.count >= maxAttempts) {
    return { isLimited: true, remainingMs: entry.resetTime - now };
  }

  return { isLimited: false, remainingMs: 0 };
}

export function recordFailedAttempt(
  ip: string,
  windowMs = 15 * 60 * 1000
) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
  } else {
    entry.count += 1;
  }
}

export function clearRateLimit(ip: string) {
  rateLimitStore.delete(ip);
}
