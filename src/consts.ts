import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "极客与怪杰 👨🏻‍💻",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "941104c@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 6,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Telegram",
    HREF: "https://t.me/tech1024",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/tech1024",
  },
];
