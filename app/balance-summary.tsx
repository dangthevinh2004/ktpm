import { transactions } from "@/lib/transactions";

export default function BalanceSummary() {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">
      <div className="border p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">Income</p>
        <p className="text-xl font-bold text-green-600">
          +${income}
        </p>
      </div>

      <div className="border p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">Expense</p>
        <p className="text-xl font-bold text-red-600">
          -${expense}
        </p>
      </div>

      <div className="border p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">Balance</p>
        <p className="text-xl font-bold">
          ${balance}
        </p>
      </div>
    </div>
  );
}
