const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  const names: string[] = [];
  return {
    props: {
      json,
      names,
    },
  };
};

type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer P;
}>
  ? P
  : never;

const jsonObj: InferPropsFromServerSideFunction<typeof getServerSideProps> = {
  json: {
    title: "Hello World",
  },
  names: ["Johnsen", "Mugen", "Queenie"],
};

console.log(jsonObj.names);
