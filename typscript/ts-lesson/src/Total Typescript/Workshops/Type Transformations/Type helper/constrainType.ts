type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

const string: AddRoutePrefix<string> = "/about";
console.log(string);
// Type 'number' does not satisfy the constraint 'string'.
