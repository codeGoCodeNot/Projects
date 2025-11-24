import { useId } from "react";

const UseId = () => {
  const id = useId();

  return (
    <>
      <form>
        <label htmlFor={id}>Enter your username</label>
        <input type="text" placeholder="Username" id={id} className="border" />
        <input type="submit" value="Go" />
      </form>
    </>
  );
};

export default UseId;
