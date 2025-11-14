type ErrorCode = "400" | "401" | "404" | "500";
type SuccessCode = "200" | "201" | "204";

const errorCode = new Set<ErrorCode>(["400", "401", "400", "404", "500"]);
const successCode = new Set<SuccessCode>(["200", "201", "204"]);
const succCode = [...successCode];
const errCode = [...errorCode];

const allCode = [...succCode, ...errCode];

console.log(allCode);
