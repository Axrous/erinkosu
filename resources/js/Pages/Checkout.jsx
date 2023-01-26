import React, { useEffect, useState } from "react";
import CustomersLayout from "@/Layouts/CustomersLayout";
import { useForm } from "@inertiajs/inertia-react";

export default function Checkout({
  order_id,
  amount,
  price,
  discount,
  totalPrice,
  room_no,
}) {
  const { data, setData, post, processing, errors } = useForm({
    amount: "",
    price: "",
    discount: "",
    totalPrice: "",
    room_no: "",
    order_id: "",
  });

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    // setData("amount", amount);
    // setData("discount", discount);
    // setData("orderId", order_id);
    // // setOrderId(order_id);
    // setData("price", price);
    // setData("totalPrice", totalPrice);
    // setData("room_no", room_no);
    setData({
      amount: amount,
      discount: discount,
      order_id: order_id,
      price: price,
      totalPrice: totalPrice,
      room_no: room_no,
    });
  };

  // const [orderId, setOrderId] = useState("");

  // useEffect(() => {
  //   setData("amount", amount);
  //   setData("discount", discount);
  //   // setData("orderId");
  //   setOrderId(order_id);
  //   setData("price", price);
  //   setData("totalPrice", totalPrice);
  //   setData("room_no", room_no);
  //   console.log(data);
  //   console.log(orderId);
  // }, []);

  function submit(e) {
    e.preventDefault();
    post("/services/transaction");
    // console.log(data);
  }
  // console.log(data);
  return (
    <CustomersLayout>
      <div className="container mx-auto border mt-10">
        <h1>Checkout</h1>
        <h2>Kamar No. {room_no}</h2>
        <h3>Harga Kamar {price}</h3>
        <h3>Lama waktu nge-kost {amount} Bulan</h3>
        <p>Diskon {discount}</p>
        <p>Total Harga {totalPrice}</p>
        <form onSubmit={submit}>
          <input type="checkbox" name="terms" id="" onChange={handleChange} />
          <label htmlFor="terms">
            Dengan ini menyatakan setuju dengan syarat dan ketentuan
          </label>
          <br />
          <button type="submit" disabled={checked == false}>
            Pesan
          </button>
        </form>
      </div>
    </CustomersLayout>
  );
}
