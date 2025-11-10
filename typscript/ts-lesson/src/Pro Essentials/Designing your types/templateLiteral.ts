type AbsoluteRoute = `/${string}`;

const goToRoute = (route: AbsoluteRoute) => {
  console.log(route);
};

goToRoute("/home");
goToRoute("/about");
goToRoute("/somewhere");
