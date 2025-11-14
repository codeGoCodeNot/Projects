type GetObj = {
  a: number;
  b: number;
};

const getObj = () => {
  const obj: GetObj = JSON.parse(`{"a": 123, "b":456}`);

  return obj;
};

const obj = getObj();
console.log(obj.b);
console.log(obj.a);
