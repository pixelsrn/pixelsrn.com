/**
 * Editable site information.
 */
export const SITE = {
    name: "PixelsRN",
    tagline: "Display system hardware designed for interaction.",
    subtext: "A new company, more to come.",
    legalName: "PixelsRN, Inc.",
    location: "Raleigh, NC",
    email: "hello@pixelsrn.com",
    disclaimer: "We read everything and reply within two business days.",
    // more detailed description for metadata
    description:
        "PixelsRN is a new hardware company in Raleigh, North Carolina.",
};

/**
 * Top bar navigation.
 */
export const NAV: { label: string; href: string }[] = [];

export const TEAM = [
    {
        name: "Ben Watson",
        role: "Chief Executive Officer",
        links: [
            {
                label: "Scholar",
                href: "https://scholar.google.com/citations?user=yfYYAMQAAAAJ",
            },
            {
                label: "Portfolio",
                href: "https://watson.csc.ncsu.edu/",
            },
            {
                label: "VX Lab",
                href: "https://vxlab.csc.ncsu.edu/",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/benjaminallenwatson/",
            },
        ],
    },
    {
        name: "Aaron Fulmer",
        role: "Chief Operating Officer",
        links: [
            {
                label: "Scholar",
                href: "https://scholar.google.com/citations?user=rtWWklQAAAAJ",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/aaron-fulmer/",
            },
        ],
    },
    {
        name: "Evan Jonson",
        role: "Chief Technology Officer",
        links: [
            {
                label: "Portfolio",
                href: "https://www.evanjonson.com/",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/evan-jonson/",
            },
        ],
    },
];

/**
 * Leave empty and the "Selected work" section won't render.
 * Shape: { title: "Paper title", venue: "CHI 2024", href: "https://doi.org/..." }
 */
export const PUBLICATIONS: { title: string; venue: string; href: string }[] =
    [];
