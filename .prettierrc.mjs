/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: { parser: "astro" },
        },
        {
            files: ["*.yml", "*.yaml", "*.json", "*.jsonc", "*.md"],
            options: { tabWidth: 2 },
        },
    ],
};

export default config;
