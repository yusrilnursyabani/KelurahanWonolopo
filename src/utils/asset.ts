const PUBLIC_ASSET_PREFIX = "/assets";

export function toAssetPath(relativePath: string): string {
  const normalizedPath = relativePath.replace(/^\/+/, "");
  return `${PUBLIC_ASSET_PREFIX}/${normalizedPath}`;
}
