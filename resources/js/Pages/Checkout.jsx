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
  roomUrl,
}) {
  const { data, setData, post, processing, errors } = useForm({
    amount: "",
    price: "",
    discount: "",
    totalPrice: "",
    room_no: "",
    order_id: "",
    bank: "",
  });
  const [clicked, setClicked] = useState("bca");
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    setData({
      amount: amount,
      discount: discount,
      order_id: order_id,
      price: price,
      totalPrice: totalPrice,
      room_no: room_no,
      bank: clicked,
    });
  };

  function submit(e) {
    e.preventDefault();
    post("/services/transaction");
  }
  console.log(clicked);
  return (
    <CustomersLayout>
      <div className="container mx-auto">
        <div className="w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto">
          <h1 className="text-center text-2xl my-10">Complete Your Purchase</h1>
          <div className="mx-auto bg-white border border-white drop-shadow-2xl">
            <div className="flex justify-between m-1 py-2 rounded-t-xl bg-slate-200 px-4 ">
              <span className="md:w-7/12  md:pl-10">Room</span>
              <span className="md:w-2/12">Price</span>
              <span className="md:w-2/12">Duration</span>
            </div>
            <div className="flex justify-between mt-3 pb-10 border-b">
              <div className="flex md:w-7/12 justify-evenly">
                <img
                  src={`/${roomUrl}`}
                  alt=""
                  className="h-32 rounded-xl hidden md:block"
                />
                <p className="my-auto w-6/12">Kamar No. {room_no}</p>
              </div>
              <span className="md:w-2/12 my-auto">Rp. {price}</span>
              <span className="md:w-2/12 my-auto mr-4">{amount} Months</span>
            </div>
            <div className="text-end m-6">
              {discount !== 0 ? (
                <>
                  <span className="text-sm">Discount</span>
                  <p className="text-md font-semibold">Rp. {discount}</p>
                </>
              ) : (
                ""
              )}
              <span className="text-sm">Total</span>
              <p className="text-md font-semibold">Rp. {totalPrice}</p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-xl">Payment Method</h3>
            <div className="mt-10">
              <div className="flex justify-evenly flex-wrap">
                {/* <input type="button" className="" value="check" /> */}
                <button
                  className={`cursor-pointer border w-5/12 py-8 bg-white rounded-xl ${
                    clicked == "bca" ? "border-cyan-400" : "border-slate-200"
                  }`}
                  onClick={(e) => setClicked("bca")}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
                    alt=""
                    className="w-24 mx-auto"
                  />
                </button>
                <button
                  className={`cursor-pointer border w-5/12 py-8  bg-white rounded-xl ${
                    clicked == "bni" ? "border-cyan-400" : "border-slate-200"
                  }`}
                  onClick={(e) => setClicked("bni")}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png"
                    alt=""
                    className="w-24 mx-auto"
                  />
                </button>
                <button
                  className={`mt-7 cursor-pointer border w-5/12 py-8  bg-white rounded-xl ${
                    clicked == "bri" ? "border-cyan-400" : "border-slate-200"
                  }`}
                  onClick={(e) => setClicked("bri")}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/1280px-BANK_BRI_logo.svg.png"
                    alt=""
                    className="w-24 mx-auto"
                  />
                </button>
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="mt-12 w-full flex flex-col">
            <div>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="mr-2"
                onChange={handleChange}
              />
              <label htmlFor="">
                Dengan ini menyatakan setuju dengan syarat dan ketentuan
              </label>
            </div>
            <button
              type="submit"
              disabled={checked == false}
              className="py-3 mt-6 bg-cyan-600 rounded-lg text-white"
            >
              Pesan
            </button>
          </form>
        </div>
      </div>
    </CustomersLayout>
  );
}
