import AdminLayout from "@/Layouts/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import { React } from "react";

export default function RoomList({ rooms }) {
  let no = 1;

  function deleteRoom(e, roomNo) {
    e.preventDefault();
    Inertia.delete(`/admin/delete-room/${roomNo}`);
  }
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
              {rooms.map((room) => (
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  key={room.no}
                >
                  <th className="px-6 py-4">{no++}</th>

                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Kamar No. {room.no}
                  </td>
                  <td className="px-6 py-4">
                    {!room.is_booked == 1 ? "available" : "booked"}
                  </td>
                  <td className="px-6 py-4">Rp. {room.price}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/edit-room/${room.no}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <span className="mx-2">|</span>
                    <button
                      className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                      onClick={(e) => deleteRoom(e, room.no)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
}
