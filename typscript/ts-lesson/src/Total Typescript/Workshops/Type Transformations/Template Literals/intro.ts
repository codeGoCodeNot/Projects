type Route = `/${string}`;

const goToRoute = (route: Route) => {
  return route;
};

console.log(goToRoute("/admin/users"));

type Routes = "/users" | "/users:id" | "/posts" | "/posts:id";
type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

const routesId: DynamicRoutes = "/posts:id";
console.log(routesId);
