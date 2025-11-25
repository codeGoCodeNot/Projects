interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-500">
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white border-b border-gray-400 dark:border-gray-500">
            Description
          </th>
          <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white border-b border-gray-400 dark:border-gray-500">
            Amount
          </th>
          <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white border-b border-gray-400 dark:border-gray-500">
            Category
          </th>
          <th className="border-b border-gray-400 dark:border-gray-500"></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className="px-4 py-2 text-gray-900 dark:text-white border-b border-gray-400 dark:border-gray-600">
              {expense.description}
            </td>
            <td className="px-4 py-2 text-gray-900 dark:text-white border-b border-gray-400 dark:border-gray-600">
              ${expense.amount.toFixed(2)}
            </td>
            <td className="px-4 py-2 border-b border-gray-400 dark:border-gray-600">
              <span className="inline-block rounded-full bg-indigo-100 dark:bg-indigo-600 px-2 py-1 text-xs font-semibold text-indigo-800 dark:text-white">
                {expense.category}
              </span>
            </td>
            <td className="px-4 py-2 border-b border-gray-400 dark:border-gray-600">
              <button
                onClick={() => onDelete(expense.id)}
                className="cursor-pointer text-white bg-red-500 hover:bg-red-600 rounded px-3 py-1 transition"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="bg-gray-50 dark:bg-gray-900">
        <tr>
          <td className="px-4 py-2 font-bold text-gray-900 dark:text-white border-t border-gray-400 dark:border-gray-500">
            Total
          </td>
          <td className="px-4 py-2 font-bold text-gray-900 dark:text-white border-t border-gray-400 dark:border-gray-500">
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td className="border-t border-gray-400 dark:border-gray-500"></td>
          <td className="border-t border-gray-400 dark:border-gray-500"></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
