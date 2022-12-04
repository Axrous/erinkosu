import CustomersLayout from "@/Layouts/CustomersLayout";
import React from "react";

export default function HistoryTransaction() {
  return (
    <CustomersLayout>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center my-10 pb-5 border-b-2">
          Transaction History
        </h1>

        <div class="overflow-x-auto relative w-8/12 mx-auto rounded-xl">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Transaction Time
                </th>
                <th scope="col" class="py-3 px-6">
                  Transaction ID
                </th>
                <th scope="col" class="py-3 px-6">
                  Status
                </th>
                <th scope="col" class="py-3 px-6">
                  Amount
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6">Hari Senin</td>
                <td class="py-4 px-6">TR-1000</td>
                <td class="py-4 px-6">PENDING</td>
                <td class="py-4 px-6">300000</td>
                <td class="py-4 px-6">
                  <button
                    type="button"
                    class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Detail
                  </button>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6">Hari Senin</td>
                <td class="py-4 px-6">TR-2000</td>
                <td class="py-4 px-6">SUCCESS</td>
                <td class="py-4 px-6">300000</td>
                <td class="py-4 px-6">
                  <button
                    type="button"
                    class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Detail
                  </button>
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <td class="py-4 px-6">Hari Senin</td>
                <td class="py-4 px-6">TR-3000</td>
                <td class="py-4 px-6">CANCEL</td>
                <td class="py-4 px-6">300000</td>
                <td class="py-4 px-6">
                  <button
                    type="button"
                    class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CustomersLayout>
  );
}
