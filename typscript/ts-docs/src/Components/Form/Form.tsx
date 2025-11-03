const Form = () => {
  return (
    <>
      <form
        className="w-full max-w-md mx-auto mt-6 bg-[#262626] border border-gray-700 rounded shadow px-5 overflow-y-auto 
        max-h-[45vh] pt-12 pb-20 z-30 
      "
      >
        <label htmlFor="title" className="block mb-2 font-bold text-white">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="w-full p-2 mb-4 rounded bg-[#181818] text-white border border-gray-600"
          placeholder="Topic Title"
        />

        <label htmlFor="category" className="block mb-2 font-bold text-white">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="w-full p-2 mb-4 rounded bg-[#181818] text-white border border-gray-600"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <label
          htmlFor="description"
          className="block mb-2 font-bold text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="w-full p-2 mb-4 rounded bg-[#181818] text-white border border-gray-600"
          placeholder="Short explanation..."
        />

        <label htmlFor="example" className="block mb-2 font-bold text-white">
          Example / Code
        </label>
        <textarea
          id="example"
          name="example"
          rows={6}
          className="w-full p-2 mb-6 rounded bg-[#181818] text-green-200 border border-gray-600"
          placeholder="TypeScript code sample..."
        />

        <button
          type="submit"
          className="w-full py-2 mt-4  text-white cursor-pointer"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
