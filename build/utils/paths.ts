import { resolve } from "path";
export const projRoot = resolve(__dirname, "..", "..");
export const buildRoot = resolve(projRoot, "build");
export const buildOutput = resolve(projRoot, "dist");
