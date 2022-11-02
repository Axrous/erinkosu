import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import CustomersLayout from "@/Layouts/CustomersLayout";
import Guest from "@/Layouts/GuestLayout";

export default function Dashboard({ auth }) {
  return (
    <>
      <Head title="Dashboard" />
      <CustomersLayout auth={auth}>
        <div>
          <h1>Aku sayang sama kamu</h1>
        </div>
      </CustomersLayout>
    </>
  );
}
