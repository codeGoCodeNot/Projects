import { S } from "ts-toolbelt";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<T extends string> = {
  [K in S.Split<T, "/">[number] as K extends `:${infer P}` ? P : never]: string;
};

type OraganisationIdPath = ExtractPathParams<UserOrganisationPath>;
const organisationIdPath: OraganisationIdPath = {
  id: "1",
  organisationId: "123",
};
console.log(organisationIdPath);
