import { useContext } from "react";
import { docsContext } from "./context/docsContext";
import Categories from "./Categories";
import docsData from "./data/data";

const Docs = () => {
  const context = useContext(docsContext);

  return (
    <section className="p-5">
      <button className="mx-auto block" onClick={context.handleToggle}>
        Get started
      </button>
      {context.toggle && <Categories />}
    </section>
  );
};

export default Docs;
