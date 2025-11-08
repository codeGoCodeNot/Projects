const errorMsg = (message: string) => {
  throw new Error(message);
};

const handleId = (params: { id: string }) => {
  const id = params.id || errorMsg("Provide id");
  console.log(`Id: ${id}`);
  return id;
};

handleId({ id: "123" });
