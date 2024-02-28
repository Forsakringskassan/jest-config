process.env.INTERNAL_FORCE_VUE_VERSION = "2";

module.exports = {
    preset: ".",
    moduleNameMapper: {
        "^vue$": "vue2",
    },
};
