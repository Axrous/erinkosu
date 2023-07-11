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
  const [modal, setModal] = useState(false);
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
                className="mr-2 hover:cursor-pointer"
                onChange={handleChange}
              />
              <label
                htmlFor=""
                onClick={(e) => setModal(true)}
                className="underline"
              >
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
        {modal ? (
          <div
            id="defaultModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50  w-full h-full pt-52 md:pt-0 px-4 md:px-0 md:p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black bg-opacity-70 flex"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto m-auto">
              {/* <!-- Modal content --> */}
              <div className="relative bg-slate-100 rounded-lg shadow ">
                {/* <!-- Modal header --> */}
                <div className="flex items-start justify-between p-4 border-b rounded-t">
                  <h3 className="text-xl font-semibold"></h3>

                  <button
                    type="button"
                    className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-hide="defaultModal"
                    onClick={(e) => setModal(!modal)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-1 space-y-6">
                  <div className="py-3 px-6 bg-white">
                    <span className="uppercase font-semibold text-md">
                      Syarat & Ketentuan
                    </span>
                  </div>
                  <div className="py-3 px-6 bg-white">
                    <h3 className="text-lg font-bold"></h3>
                    <div className="border py-3 px-5 flex justify-between mt-3 rounded-xl my-2">
                      <p className="font-semibold"></p>
                      <div className="text-start">
                        Ketertiban dan Kedisiplinan: <br />
                        a. Penyewa diharapkan untuk menjaga ketertiban dan
                        kedisiplinan di dalam rumah kos. <br />
                        b. Larangan terhadap kebisingan berlebihan, tindakan
                        yang mengganggu ketenangan penyewa lain, atau perilaku
                        yang melanggar hukum.
                        <br /> c. Penyewa harus mengikuti aturan-aturan yang
                        ditetapkan oleh pengelola kos, seperti jam malam atau
                        larangan mengundang tamu di atas kapasitas yang
                        ditentukan.
                        <br />
                        <br /> Kebersihan dan Perawatan: <br />
                        a. Penyewa bertanggung jawab untuk menjaga kebersihan
                        dan kebersihan diri pribadi.
                        <br /> b. Pembuangan sampah harus dilakukan sesuai
                        dengan petunjuk yang diberikan dan di tempat yang
                        ditentukan.
                        <br /> c. Kerusakan yang disebabkan oleh penyewa harus
                        dilaporkan dan diperbaiki sesuai dengan prosedur yang
                        ditetapkan. Penyewa mungkin bertanggung jawab untuk
                        biaya perbaikan jika kerusakan disebabkan oleh kelalaian
                        atau kesengajaan mereka.
                        <br />
                        <br /> Keamanan: <br />
                        a. Penyewa harus menjaga keamanan rumah kos dan barang
                        pribadi mereka sendiri. Pintu dan jendela harus dikunci
                        dengan benar saat meninggalkan ruangan atau rumah kos.{" "}
                        <br />
                        b. Pengunjung yang tidak diakui atau tamu yang tidak
                        berhak masuk ke dalam rumah kos mungkin tidak
                        diperbolehkan.
                        <br />
                        <br /> <br />
                        Pembayaran dan Keterlambatan: <br />
                        a. Penyewa diharapkan membayar sewa tepat waktu sesuai
                        dengan kesepakatan dalam kontrak. <br />
                        b. Jika penyewa telat membayar sewa, dapat dikenakan
                        denda atau sanksi yang telah ditetapkan dalam kontrak.{" "}
                        <br />
                        <br />
                        Pengakhiran Kontrak: <br />
                        a. Konsekuensi pengakhiran kontrak sewa dapat diterapkan
                        jika penyewa melanggar peraturan yang ditetapkan atau
                        tidak mematuhi kewajibannya. <br />
                        b. Pengelola kos berhak untuk mengakhiri kontrak sewa
                        dan meminta penyewa untuk meninggalkan rumah kos jika
                        penyewa melanggar peraturan atau tidak membayar sewa
                        tepat waktu.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </CustomersLayout>
  );
}
