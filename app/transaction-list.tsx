import { transactions } from "@/lib/transactions";

export default function TransactionList() {
  return (
    <ul className="space-y-2">
      {transactions.map((tx) => (
        <li
          key={tx.id}
          className="border p-3 rounded-lg flex justify-between"
        >
          <div>
            <p className="font-medium">{tx.title}</p>
            <p className="text-sm text-muted-foreground">
              {tx.category}
            </p>
          </div>

          <span
            className={
              tx.type === "income"
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {tx.type === "income" ? "+" : "-"}${tx.amount}
          </span>
        </li>
      ))}
    </ul>
  );
}
