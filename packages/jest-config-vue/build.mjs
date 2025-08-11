import { build as esbuild, analyzeMetafile } from "esbuild";

const result = await esbuild({
    entryPoints: [
        "src/jest-junit.js",
        "src/jest-serializer-vue.js",
        "src/jest-transform-stub.js",
        "src/jest-watch-typeahead-filename.js",
        "src/jest-watch-typeahead-testname.js",
        "src/vue3-jest.js",
    ],
    outdir: "dist",
    bundle: true,
    platform: "node",
    target: ["node16"],
    format: "cjs",
    logLevel: "info",
    metafile: true,
    external: [
        "@babel/core",
        "@vue/compiler-sfc",
        "babel-jest",
        "chalk",
        "coffeescript",
        "consolidate",
        "jest-regex-util",
        "jest-util",
        "jest-watcher",
        "less",
        "prettier",
        "sass",
        "stylus",
        "typescript",
        "vue",
        "vue-template-compiler",
    ],
});

console.log(await analyzeMetafile(result.metafile));
