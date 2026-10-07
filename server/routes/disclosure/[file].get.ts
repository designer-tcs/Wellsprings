import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { join } from "node:path";
import { createError, defineEventHandler, getRouterParam, sendStream, setHeader } from "h3";

const FILES = new Set([
  "cbse-grant-letter.pdf",
  "trust-deed.pdf",
  "noc-certificate.pdf",
  "recognition-certificate.pdf",
  "building-safety-certificate.pdf",
  "fire-safety-certificate.pdf",
  "water-certificate.pdf",
]);

export default defineEventHandler(async (event) => {
  const file = getRouterParam(event, "file");
  if (!file || !FILES.has(file)) {
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }

  const path = join(process.cwd(), "public", "disclosure", file);
  const info = await stat(path).catch(() => null);
  if (!info?.isFile()) {
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }

  setHeader(event, "Content-Type", "application/pdf");
  setHeader(event, "Content-Disposition", `inline; filename="${file}"`);
  setHeader(event, "Content-Length", info.size);
  return sendStream(event, createReadStream(path));
});
