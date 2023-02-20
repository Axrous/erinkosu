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

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-7/12 mx-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Order ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {transaction.id}
                  </th>
                  <td class="px-6 py-4">
                    {date(transaction.booked_at).toLocaleDateString()}
                  </td>
                  <td class="px-6 py-4 uppercase">{transaction.status}</td>
                  <td class="px-6 py-4 text-right">
                    <Link
                      href={`/services/transaction-history/${transaction.id}`}
                      className="py-2 px-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Detail
                    </Link>
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
