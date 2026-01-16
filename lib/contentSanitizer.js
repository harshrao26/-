export function sanitizeBlogContent(content) {
  if (!content) return "";

  // Basic cleaning: remove common junk patterns
  return content
    .replace(/\[\d+\]/g, "") // Remove citations like [1], [2]
    .replace(/undefined/g, "") // Remove literals
    .trim();
}
