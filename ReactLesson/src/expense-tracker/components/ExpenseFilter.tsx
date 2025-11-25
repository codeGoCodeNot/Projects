import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="inline-block mb-4">
      <label
        htmlFor="category-filter"
        className="mr-2 font-semibold text-gray-900 dark:text-white"
      >
        Filter by category:
      </label>
      <select
        id="category-filter"
        onChange={(e) => onSelectCategory(e.target.value)}
        className="
          curs  
          rounded
          px-4 py-2
          border border-gray-300 dark:border-gray-700
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-white
          font-medium
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          transition
          shadow-sm
        "
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
