type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = {
  [K in Route]: K;
};

const route: RoutesObject = {
  "/": "/",
  "/about": "/about",
  "/admin": "/admin",
  "/admin/users": "/admin/users",
};

console.log(route);
