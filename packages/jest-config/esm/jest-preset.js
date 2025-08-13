const defaultConfig = require("../jest-preset");

// Enable esm for Typescript files
defaultConfig.extensionsToTreatAsEsm = [".ts", ".tsx", ".mts"];
defaultConfig.transform = {
    ["^.+\\.m?tsx?$"]: [
        require.resolve("ts-jest"),
        {
            useESM: true,
        },
    ],
};
module.exports = defaultConfig;
