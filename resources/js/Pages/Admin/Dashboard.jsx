import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { React } from "react";

export default function Dashboard() {
  console.log("berhasil");
  return (
    <>
      <Head title="Dashboard" />
      <AdminLayout>
        <h1>Ini adalah halaman admin</h1>
      </AdminLayout>
    </>
  );
}
