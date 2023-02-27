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
          <div class="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-50 dark:bg-gray-800">
            <p className="md:text-3xl text-center">Kamar Kosong</p>
            <p className="text-6xl">5</p>
          </div>
          <div class="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-50 dark:bg-gray-800">
            <p className="md:text-3xl text-center">Kamar Terisi</p>
            <p className="text-6xl">11</p>
          </div>
          <div class="flex flex-col items-center justify-evenly h-52 rounded text-white bg-gray-50 dark:bg-gray-800">
            <p className="md:text-3xl text-center">Total Kamar</p>
            <p className="text-6xl">16</p>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
