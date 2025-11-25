import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electricity", amount: 10, category: "Utilities" },
    { id: 2, description: "Beer", amount: 10, category: "Groceries" },
    { id: 3, description: "Condom", amount: 5, category: "Entertainment" },
    { id: 4, description: "Internet", amount: 40, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="flex flex-col gap-20 p-20">
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="flex justify-center">
          <div className="overflow-x-auto w-[90%] rounded-md shadow-2xl p-5">
            <div className="mb-3">
              <ExpenseFilter
                onSelectCategory={(category) => setSelectedCategory(category)}
              />
            </div>
            <ExpenseList
              expenses={visibleExpenses}
              onDelete={(id) =>
                setExpenses(expenses.filter((expense) => expense.id !== id))
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
