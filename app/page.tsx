import BalanceSummary from "./balance-summary";
import TransactionList from "./transaction-list";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <BalanceSummary />
      <TransactionList />
    </main>
  );
}
