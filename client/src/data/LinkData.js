export const LinkData = [
  {
    alias: "Home",
    link: "/",
    icon: null,
    order: 10,
    subLinks: [],
  },
  {
    alias: "Projects",
    link: "/projects",
    icon: null,
    order: 20,
    subLinks: [
      {
        alias: "View All Projects",
        link: "/projects",
        icon: null,
        order: 10,
        subLinks: [],
      },
      {
        alias: "Create Project",
        link: "/projects/new",
        icon: null,
        order: 20,
        subLinks: [],
      },
    ],
  },
  {
    alias: "Advent Code Projects",
    link: "/advent-23",
    icon: null,
    order: 99,
    subLinks: [
      {
        alias: "Year 2023",
        link: "/advent",
        icon: null,
        order: 10,
        subLinks: [],
      },
      {
        alias: "Manage",
        link: "/advent-manage",
        icon: null,
        order: 20,
        subLinks: [],
      },
    ],
  },
];
