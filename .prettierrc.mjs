/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: { parser: "astro" },
        },
        {
            files: ["*.yml", "*.yaml", "*.json", "*.jsonc"],
            options: { tabWidth: 2 },
        },
        {
            files: "*.md",
            options: { proseWrap: "preserve" },
        },
    ],
};
