// type Route =
//   | {
//       route: "/";
//       search: {
//         page: string;
//         perPage: string;
//       };
//     }
//   | { route: "/about" }
//   | { route: "/admin" }
//   | { route: "/admin/users" };

// type RoutesObject = {
//   [R in Route as R["route"]]: R extends { search: infer S } ? S : never;
// };
