import CustomersLayout from "@/Layouts/CustomersLayout";
import { Link } from "@inertiajs/inertia-react";
import { get } from "lodash";
import React, { useState } from "react";

export default function HistoryTransaction({ transactions }) {
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState("");
  const [showVA, setShowVA] = useState(false);

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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-11/12 lg:w-7/12 mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={transaction.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {transaction.id}
                  </th>
                  <td className="px-6 py-4">
                    {date(transaction.booked_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 uppercase">{transaction.status}</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/services/transaction-history/${transaction.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
