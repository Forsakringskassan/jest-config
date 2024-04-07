module.exports = {
    /* put cache in working directory in case multiple simultaneous processes
     * runs the same tests (i.e. multiple jenkins jobs on the same node). */
    cacheDirectory: "<rootDir>/.jest-cache",

    /* collect coverage by default */
    collectCoverage: true,

    /* collect coverage from source folders only, ignoring test-cases and other
     * misc files */
    collectCoverageFrom: [
        "src/**/*.[jt]s",
        "packages/*/src/**/*.[jt]s",

        /* patterns to ignore */
        "!**/*.spec.[jt]s",
        "!**/*.d.ts",
        "!**/index.[jt]s",
        "!**/__fixtures__/**",
        "!**/generated/**",
    ],

    coverageReporters: [
        "text",
        "text-summary",
        "cobertura",
        "html",
        "json",
        "lcov",
    ],

    /* until jest 30 we must force prettier 2 or formatting snapshots wont work */
    prettierPath: require.resolve("prettier-2"),

    /* ignore files in the temp folder, sometimes used to put typescript
     * declarations before dts rollup */
    modulePathIgnorePatterns: ["<rootDir>/temp"],

    /* transform typescript with ts-jest */
    transform: {
        "^.+\\.tsx?$": require.resolve("ts-jest"),
    },

    /* while test-cases should not be compiled explicitly ignore them anyway in
     * case they are accidentally compiled to the "dist" folder */
    testPathIgnorePatterns: [
        "/node_modules/",
        "<rootDir>/build/",
        "<rootDir>/dist/",
        "<rootDir>/cypress/",
        "<rootDir>/packages/.*/build/",
        "<rootDir>/packages/.*/dist/",
    ],

    watchPlugins: [
        require.resolve("jest-watch-typeahead/filename"),
        require.resolve("jest-watch-typeahead/testname"),
    ],

    /* add junit report in addition to default output */
    reporters: [
        "default",
        [
            require.resolve("jest-junit"),
            {
                suiteName: "jest tests",
                outputName: "test-results/jest-junit.xml",
            },
        ],
    ],
};
