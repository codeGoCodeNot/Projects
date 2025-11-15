type Event = `log_in` | "log_out" | "sign_up";

type ObjectOfKeys = Record<Uppercase<Event>, string>;
const obj: ObjectOfKeys = {
  LOG_IN: "login",
  LOG_OUT: "logout",
  SIGN_UP: "signup",
};

console.log(obj);
