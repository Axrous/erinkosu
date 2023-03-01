import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { React } from "react";

export default function RoomList() {
  return (
    <>
      <Head title="Room" />
      <AdminLayout>
        <div className="mb-6 mt-2">
          <Link
            href="/admin/create-room"
            className="border px-6 py-2 rounded-lg bg-gray-700 text-gray-400"
          >
            ADD ROOM
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Room Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th className="px-6 py-4">1.</th>

                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kamar No. 1
                </td>
                <td className="px-6 py-4">Available</td>
                <td className="px-6 py-4">Rp. 300000</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <span className="mx-2">|</span>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
}
