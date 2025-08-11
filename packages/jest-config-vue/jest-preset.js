module.exports = {
    /* put cache in working directory in case multiple simultaneous processes
     * runs the same tests (i.e. multiple jenkins jobs on the same node). */
    cacheDirectory: "<rootDir>/.jest-cache",

    /* until jest 30 we must force prettier 2 or formatting snapshots wont work */
    prettierPath: require.resolve("prettier-2"),

    transform: {
        /* transform Vue.js files with vue-jest */
        "^.+\\.vue$": require.resolve(`./dist/vue3-jest`),

        /* transform static files with jest-transform-stub */
        ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
            require.resolve("./dist/jest-transform-stub"),

        /* transform typescript with ts-jest */
        "^.+\\.(ts|tsx)$": [
            require.resolve("ts-jest"),
            {
                babelConfig: true,
            },
        ],

        /* transform javascript with babel-jest */
        "^.+\\.(js|jsx)$": require.resolve("babel-jest"),
    },

    moduleFileExtensions: [
        /* default extensions */
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node",

        /* tell Jest to handle *.vue files */
        "vue",
    ],

    /* support the same @ -> src alias mapping in source code */
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },

    /* ignore files in the temp folder, sometimes used to put typescript
     * declarations before dts rollup */
    modulePathIgnorePatterns: ["<rootDir>/temp"],

    snapshotSerializers: [require.resolve("./dist/jest-serializer-vue")],

    testEnvironment: require.resolve("jest-environment-jsdom"),
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },

    testMatch: [
        "<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)",
        "<rootDir>/src/**/*.test.(js|jsx|ts|tsx)",
        "<rootDir>/src/**/__tests__/*.(js|jsx|ts|tsx)",
        "<rootDir>/htmlvalidate/**/*.spec.(js|jsx|ts|tsx)",
        "<rootDir>/sitevision/**/*.spec.(js|jsx|ts|tsx)",
    ],

    watchPlugins: [
        require.resolve("./dist/jest-watch-typeahead-filename"),
        require.resolve("./dist/jest-watch-typeahead-testname"),
    ],

    /* add junit report in addition to default output */
    reporters: [
        "default",
        [
            require.resolve("./dist/jest-junit"),
            {
                suiteName: "jest tests",
                outputName: "test-results/jest-junit.xml",
            },
        ],
    ],
};
