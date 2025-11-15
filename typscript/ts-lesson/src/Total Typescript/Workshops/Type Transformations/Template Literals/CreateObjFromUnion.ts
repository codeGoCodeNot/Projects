type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = Record<TemplateLiteralKey, string>;

const obj: ObjectOfKeys = {
  userName: "Johnsen",
  postId: "3",
  commentName: "CodeGoCodeNot",
  commentId: "4",
  postName: "John",
  userId: "5",
};

console.log(obj);
