require("@forsakringskassan/eslint-config/patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["@forsakringskassan"],

    overrides: [
        {
            /* ensure we lint *.cjs and *.mjs files as well */
            files: ["*.cjs", "*.mjs"],
        },
        {
            files: ["./*.{js,ts,cjs,mjs}", "./packages/*/*.{js,ts,cjs,mjs}"],
            extends: ["@forsakringskassan/cli"],
        },
        {
            files: "*.ts",
            extends: ["@forsakringskassan/typescript"],
        },
        {
            files: "*.vue",
            extends: ["@forsakringskassan/vue"],
        },
        {
            files: "*.spec.[jt]s",
            extends: ["@forsakringskassan/jest"],
        },
    ],
};
