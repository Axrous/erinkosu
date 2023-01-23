import React from "react";
import CustomersLayout from "@/Layouts/CustomersLayout";

export default function Checkout({ order_id, amount }) {
  return (
    <CustomersLayout>
      <div className="container mx-auto border mt-10">
        <h1>Checkout</h1>
        <h2>Kamar No. </h2>
        <h3>Harga Kamar 300.000</h3>
        <h3>Lama waktu nge-kost {amount} Bulan</h3>
        <p>Diskon 40.000</p>
        <p>Total Harga 860.000</p>
      </div>
    </CustomersLayout>
  );
}
