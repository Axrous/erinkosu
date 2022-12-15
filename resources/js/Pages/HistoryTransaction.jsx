import CustomersLayout from "@/Layouts/CustomersLayout";
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

        <div className="overflow-x-auto relative w-8/12 mx-auto rounded-xl">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Transaction Time
                </th>
                <th scope="col" className="py-3 px-6">
                  Transaction ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  Amount
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={transaction.id}
                >
                  <td className="py-4 px-6">
                    {date(transaction.booked_at).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">{transaction.id}</td>
                  <td className="py-4 px-6 uppercase">{transaction.status}</td>
                  <td className="py-4 px-6">{transaction.amount}</td>
                  <td className="py-4 px-6">
                    <a
                      href={`/services/transaction-history/${transaction.id}`}
                      className="py-2 px-6 text-s font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Detail
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CustomersLayout>
  );
}
