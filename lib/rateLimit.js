/**
 * Simple in-memory rate limiter
 * For production at scale, replace with Redis (Upstash free tier works great)
 * This handles typical agency website traffic perfectly fine
 */

const rateLimitMap = new Map();

// Clean up old entries every 10 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of rateLimitMap.entries()) {
    if (now - data.windowStart > 60 * 60 * 1000) {
      rateLimitMap.delete(key);
    }
  }
}, 10 * 60 * 1000);

/**
 * @param {string} identifier  - IP address or any unique key
 * @param {number} limit       - max requests allowed in the window
 * @param {number} windowMs    - time window in milliseconds
 * @returns {{ success: boolean, remaining: number, resetAt: number }}
 */
export function rateLimit(identifier, limit = 10, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const existing = rateLimitMap.get(identifier);

  if (!existing || now - existing.windowStart > windowMs) {
    // New window
    rateLimitMap.set(identifier, { count: 1, windowStart: now });
    return { success: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (existing.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: existing.windowStart + windowMs,
    };
  }

  existing.count += 1;
  return {
    success: true,
    remaining: limit - existing.count,
    resetAt: existing.windowStart + windowMs,
  };
}
