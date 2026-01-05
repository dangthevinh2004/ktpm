import { transactions } from "@/lib/transactions";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Transactions
      </h1>

      <ul className="space-y-2">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className="border p-3 rounded-lg flex justify-between"
          >
            <span>{tx.title}</span>
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
    </main>
  );
}
