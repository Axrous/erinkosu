import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { React } from "react";

export default function EditRoom() {
  return (
    <>
      <Head title="Edit Room" />
      <AdminLayout>
        <div className="p-4 mx-auto w-8/12">
          <h1 className="m-4 mb-10 text-2xl">Kamar No. 1</h1>
          <form className="p-4 border-b mb-4 rounded-lg shadow-xl">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="floating_price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                defaultValue="200000"
                required
              />
              <label
                htmlFor="floating_price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Harga Kamar
              </label>
            </div>
            <button className="bg-blue-500 text-gray-200 px-5 py-2 rounded-md">
              Submit
            </button>
          </form>
          <div className="mb-4 flex flex-row">
            <input
              className="block px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="user_avatar"
              type="file"
            />
            <button className="px-7 ml-6 bg-blue-500 rounded-lg text-gray-200">
              Add
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img
                      src="/docs/images/products/apple-watch.png"
                      alt="Apple Watch"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
