import CustomersLayout from "@/Layouts/CustomersLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function HistoryTransaction({ transactions }) {
  function date(timestamp) {
    const dateTime = new Date(timestamp * 1000);
    return dateTime;
  }
  return (
    <CustomersLayout>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center my-10 pb-5 border-b-2">
          Transaction History
        </h1>

        <div className="">
          {transactions.map((transaction) => (
            <div
              className="border w-11/12 md:w-8/12 lg:w-6/12 mx-auto p-5 rounded-2xl bg-[#D9D9D9]"
              key={transaction.id}
            >
              <div className="flex justify-between">
                <span className="text-sm md:text-md uppercase">
                  {transaction.id}
                </span>
                <span className="text-sm md:text-md">
                  {date(transaction.booked_at).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center mt-20 justify-between">
                <h2 className="text-sm md:text-md uppercase">
                  Status: {transaction.status}
                </h2>
                <Link
                  href={`/services/transaction-history/${transaction.id}`}
                  className="py-2 px-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CustomersLayout>
  );
}
