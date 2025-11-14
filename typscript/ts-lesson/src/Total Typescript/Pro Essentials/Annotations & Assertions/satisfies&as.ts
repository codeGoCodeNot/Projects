const obj: Record<string, number> = {};

obj.a = 1;
obj.b = 2;

const menuConfig = {
  home: {
    label: "Home",
    link: "/home",
  },
  services: {
    label: "Services",
    children: [
      {
        label: "Consulting",
        link: "/services/consulting",
      },
      {
        label: "Development",
        link: "/services/development",
      },
    ],
  },
} as const satisfies Record<
  string,
  | {
      label: string;
      link: string;
    }
  | {
      label: string;
      children: {
        label: string;
        link: string;
      }[];
    }
>;

console.log(menuConfig.services["label"]);

const label = menuConfig.home.label;
console.log(label);

// const el = document.getElementById("app") as HTMLElement;
