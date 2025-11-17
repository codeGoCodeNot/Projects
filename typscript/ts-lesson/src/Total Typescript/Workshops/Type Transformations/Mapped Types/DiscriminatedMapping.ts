type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

type RoutesObject = {
  [R in Route as R["route"]]: R["search"];
};

const routes: RoutesObject = {
  "/": {
    page: "2",
    perPage: "1",
  },
  "/about": { about: "home" },
  "/admin": { admin: "not" },
  "/admin/users": { user: "Johnsenboy" },
};

console.log(routes);
