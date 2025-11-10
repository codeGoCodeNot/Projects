type ErrorShape = {
  error: {
    message: string;
  };
};

type DataShape<TData> =
  | {
      data: TData;
    }
  | ErrorShape;

type UserDataShape = DataShape<{ id: string; name?: string; email?: string }>;

type PostDataShape = DataShape<{ id: string; title?: string; body?: string }>;

const userData: UserDataShape = {
  data: {
    id: "20",
  },
};

const postDataShape: PostDataShape = {
  data: {
    id: "25",
  },
};

console.log(userData.data);
console.log(postDataShape.data);
