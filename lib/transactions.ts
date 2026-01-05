import { Transaction } from "./transaction";

export const transactions: Transaction[] = [
  {
    id: "1",
    title: "Salary - August",
    amount: 1500,
    type: "income",
    category: "Job",
    createdAt: new Date("2025-08-01"),
  },
  {
    id: "2",
    title: "Freelance Project",
    amount: 800,
    type: "income",
    category: "Freelance",
    createdAt: new Date("2025-08-05"),
  },
  {
    id: "3",
    title: "Rent",
    amount: 500,
    type: "expense",
    category: "Housing",
    createdAt: new Date("2025-08-02"),
  },
  {
    id: "4",
    title: "Groceries",
    amount: 120,
    type: "expense",
    category: "Food",
    createdAt: new Date("2025-08-03"),
  },
  {
    id: "5",
    title: "Coffee",
    amount: 5,
    type: "expense",
    category: "Food",
    createdAt: new Date("2025-08-06"),
  },
  {
    id: "6",
    title: "Internet Bill",
    amount: 30,
    type: "expense",
    category: "Utilities",
    createdAt: new Date("2025-08-04"),
  },
];

