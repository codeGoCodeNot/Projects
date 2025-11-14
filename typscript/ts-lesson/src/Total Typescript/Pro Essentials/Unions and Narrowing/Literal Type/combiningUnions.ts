type ErrorCode = "400" | "401" | "404" | "500";
type SuccessCode = "200" | "201" | "204";
type HttpCode = ErrorCode | SuccessCode;

const handleErrorCase = (code: ErrorCode) => console.log(code);
const handleSuccessCase = (code: SuccessCode) => console.log(code);
const handleAllCase = (code: HttpCode) => console.log(code);

handleErrorCase("400");
handleSuccessCase("200");
handleAllCase("204");
