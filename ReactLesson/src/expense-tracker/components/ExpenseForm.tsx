import categories from "../categories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50, { message: "Description should not be more than 50 characters" }),
  amount: z.number({ message: "Amount is required" }).min(0.01).max(100_000),
  category: z.enum(categories, {
    message: "Category is required.",
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data: ExpenseFormData) => {
        onSubmit(data);
        reset();
      })}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md px-6 py-5 mb-6 max-w-lg mx-auto"
      autoComplete="off"
    >
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block mb-1 font-semibold text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="w-full rounded px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter description"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block mb-1 font-semibold text-gray-900 dark:text-white"
        >
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="w-full rounded px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter amount"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block mb-1 font-semibold text-gray-900 dark:text-white"
        >
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="
          cursor-pointer
          w-full rounded px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select category...</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="
        cursor-pointer
        bg-indigo-600 text-white rounded px-5 py-2 font-semibold shadow hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
