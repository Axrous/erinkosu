import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { React } from "react";

export default function Dashboard({ room }) {
  return (
    <>
      <Head title="Dashboard" />
      <AdminLayout>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-800">
            <p className="md:text-3xl text-center">Kamar Kosong</p>
            <p className="text-6xl">{room.availableRoom}</p>
          </div>
          <div className="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-800">
            <p className="md:text-3xl text-center">Kamar Terisi</p>
            <p className="text-6xl">{room.bookedRoom}</p>
          </div>
          <div className="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-800">
            <p className="md:text-3xl text-center">Total Kamar</p>
            <p className="text-6xl">{room.sumRoom}</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl mb-1 tracking-wide">Create Voucher</h3>
          <div className="flex justify-between border p-6 mb-4 items-end shadow-md rounded-md">
            <div>
              <label htmlFor="" className="text-sm">
                Nama Voucher
              </label>
              <input
                type="text"
                id="small-input"
                className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="NAMA VOUCHER"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Limit Voucher
              </label>
              <input
                type="text"
                id="Limit Voucher"
                className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="NAMA VOUCHER"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Jumlah Diskon
              </label>
              <input
                type="text"
                id="amount discount"
                className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="JUMLAH DISKON"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Voucher Expire
              </label>
              <input
                type="date"
                id="amount discount"
                className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="px-6 py-1 rounded-md bg-blue-500 text-gray-200"
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="border bg-gray-800 rounded">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 m-6">
            <div className="bg-white rounded-lg">
              <div className="flex justify-between border-b-2 px-6 py-4 shadow-lg rounded-b-2xl">
                <p>Kamar No. 1</p>
                <span className="border w-5 h-5 rounded-full bg-red-600"></span>
              </div>
              <div className="flex justify-between my-3 mx-6">
                <p>Arga Satya</p>
                <p>12/12/2022</p>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
