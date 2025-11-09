const logId = (obj: { id: string }) => {
  console.log(obj.id);
};
const logName = (obj: { name: string }) => {
  console.log(obj.name);
};

const loggers = [logId, logName];

const logAll = (obj: { id: string } & { name: string }) => {
  loggers.forEach((log) => log(obj));
};

logAll({ id: "123", name: "Johnsen" });
