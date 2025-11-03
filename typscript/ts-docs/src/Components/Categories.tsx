import { useState } from "react";
import docsData from "./data/data";
import DocsContent from "./DocsContent";

const Categories = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleToggle = () => setToggle((c) => !c);
  const handleData = (cat: string) => {
    if (selectedCategory === cat) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(cat);
    }
  };

  const uniqueCategories = [...new Set(docsData.map((item) => item.category))];

  return (
    <>
      <div className="my-10 border border-gray-700 shadow-2xl p-5 flex justify-center items-start ">
        <button onClick={handleToggle} className="w-[80%]">
          Categories
        </button>
      </div>
      {toggle && (
        <div className="mx-5 border border-gray-700 shadow-2xl p-5">
          <div className="flex flex-col justify-center items-center gap-5">
            {uniqueCategories.map((cat, idx) => (
              <button
                onClick={() => handleData(cat)}
                className="w-[80%] cursor-pointer transition-colors duration-150 hover:bg-[#313131] px-4 py-2 rounded"
                key={idx}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="pb-40">
        {selectedCategory && <DocsContent category={selectedCategory} />}
      </div>
    </>
  );
};

export default Categories;
