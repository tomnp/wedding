export function getImagePath(src: string): string {
  const basePath = process.env.BASEPATH || '';
  // If the src is already a full URL, return it as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  // Otherwise, prepend the base path
  return `${basePath}${src}`;
} 