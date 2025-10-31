/**
 * Piston API endpoint paths
 * These are the fixed API paths - combine with base URL from environment
 */
export const PISTON_API_PATHS = {
  /** GET - Fetch available runtimes/languages */
  RUNTIMES: "/api/v2/piston/runtimes",
  /** POST - Execute code */
  EXECUTE: "/api/v2/piston/execute",
} as const;

/**
 * Get the full Piston API URL for an endpoint
 * @param path - The API path to use
 * @returns Full URL combining base URL from env with the endpoint path
 */
export function getPistonApiUrl(path: keyof typeof PISTON_API_PATHS): string {
  const baseUrl = process.env.PISTON_API_URL || "https://emkc.org";
  // Remove trailing slash from base URL if present
  const cleanBaseUrl = baseUrl.replace(/\/$/, "");
  return `${cleanBaseUrl}${PISTON_API_PATHS[path]}`;
}
