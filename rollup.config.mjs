import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { format } from "prettier";

export default {
    input: "src/index.ts",
    output: [
        {
            format: "umd",
            file: "dist/helloWorld.umd.js",
            name: "helloWorld"
        },
        {
            format: "cjs",
            file: "dist/helloWorld.cjs.js",
        },
        {
            format: "es",
            file: "dist/helloWorld.es.js",
        }
    ],
    plugins: [typescript(), terser()]
}