process.env.INTERNAL_FORCE_VUE_VERSION = "3";

module.exports = {
    preset: ".",
    moduleNameMapper: {
        "^vue$": "vue3",
    },
};
