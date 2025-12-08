"use client";

import PlaceHolder from "@/components/PlaceHolder";

const Error = ({ error }: { error: Error }) => {
  return <PlaceHolder label={error.message || "Something went wrong!"} />;
};

export default Error;
