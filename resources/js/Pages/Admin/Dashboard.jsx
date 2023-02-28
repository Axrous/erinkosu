import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { React } from "react";

export default function Dashboard() {
  console.log("berhasil");
  return (
    <>
      <Head title="Dashboard" />
      <AdminLayout>
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-800">
            <p className="md:text-3xl text-center">Kamar Kosong</p>
            <p className="text-6xl">5</p>
          </div>
          <div class="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-800">
            <p className="md:text-3xl text-center">Kamar Terisi</p>
            <p className="text-6xl">11</p>
          </div>
          <div class="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-800">
            <p className="md:text-3xl text-center">Total Kamar</p>
            <p className="text-6xl">16</p>
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
