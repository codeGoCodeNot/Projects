import { useContext, useState } from "react";
import { docsContext } from "./context/docsContext";
import Categories from "./Categories";
import Form from "./Form/Form";

const Docs = () => {
  const context = useContext(docsContext);
  const [showForm, setShowForm] = useState(false);
  const handleForm = () => setShowForm((c) => !c);

  return (
    <>
      <section className="px-5">
        <button className="mx-auto block" onClick={context.handleToggle}>
          Get started
        </button>
        {context.toggle && <Categories />}

        <div className="flex justify-center mt-5">
          <button className="" onClick={handleForm}>
            {showForm ? "Hide Form" : "Add Doc"}
          </button>
        </div>
        {showForm && (
          <div className="w-full mt-5">
            <Form />
          </div>
        )}
      </section>
    </>
  );
};

export default Docs;
