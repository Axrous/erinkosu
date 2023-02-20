import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";
import { get } from "lodash";
import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
// import { Link } from "@inertiajs/react";

export default function DetailService({ room, images }) {
  const { flash, setFlash } = usePage().props;
  const [Image, setImage] = useState(images[0].url);
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie] = useCookies(["dataCheckout"]);

  const { data, setData, post, processing, errors } = useForm({
    amount: 3,
    voucher: "0",
    roomId: room.no,
  });
  const [price, setPrice] = useState(data.amount * room.price);

  function radioHandleChange(e) {
    setPrice(e.target.value * room.price);
    setData("amount", e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    post("/service/checkout");
  }

  function checkVoucher(e) {
    e.preventDefault();
    post(`/check-voucher`);
  }
  return (
    <>
      <Head title={`Kamar No. ${room.no}`} />
      <CustomersLayout>
        <div className="container mx-auto mb-2">
          <div className="w-8/12 mx-auto">
            <section className="flex mt-10 lg:flex-row flex-col">
              <div className="xl:w-6/12">
                <div className=" border-2 rounded-2xl p-2">
                  <img
                    src={`/${Image}`}
                    alt=""
                    className=" w-full md:h-96 object-contain"
                  />
                </div>
                <ul className="flex mt-6">
                  {images.map((image) => {
                    return (
                      <li className="" key={image.id}>
                        <img
                          src={`/${image.url}`}
                          alt=""
                          className="border h-20 w-full object-cover hover:cursor-pointer"
                          onClick={() => setImage(image.url)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="lg:w-6/12 mt-4 border-x-2 lg:ml-16 border-black md:pl-4 px-2 py-2 md:py-0 lg:my-auto">
                <h2 className="text-4xl tracking-wider text-center md:text-left">
                  Kamar No. {room.no}
                </h2>
                <span className="block mt-2 tracking-wider text-xl">
                  Rp. {room.price}/bulan
                </span>
                <div>
                  <span className="mt-4">Fasilitas:</span>
                  <ul className="flex flex-col md:flex-row md:flex-wrap list-inside w-full list-disc">
                    <li className="md:w-6/12">K. Mandi Dalam</li>
                    <li className="md:w-6/12">Listrik</li>
                    <li className="md:w-6/12">Air</li>
                    <li className="md:w-6/12">Kasur</li>
                    <li className="md:w-6/12">Lemari</li>
                    <li className="md:w-6/12">Meja & kursi</li>
                  </ul>
                </div>
                <button
                  className="block w-full mt-10 md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Pesan Kamar
                </button>
              </div>
            </section>
          </div>
          {showModal ? (
            <>
              <div className="container mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col md:w-[500px] bg-white outline-none focus:outline-none mx-auto">
                    {/*header*/}
                    <div className="p-5 border-b border-solid border-slate-200 rounded-t px-12 text-center">
                      <h3 className="text-3xl font-semibold">
                        Kamar No. {room.no}
                      </h3>
                    </div>
                    {/*body*/}
                    <h4 className="text-center">Lama waktu nge-Kost :</h4>
                    <form onSubmit={checkVoucher} id="check_voucher"></form>
                    <form onSubmit={submit}>
                      <div className="relative px-6 pt-2 flex flex-col md:flex-row md:justify-evenly">
                        {/* <p className="my-4 text-slate-500 text-lg leading-relaxed"></p> */}
                        <div className="flex items-center mb-4">
                          <input
                            id="option-1"
                            type="radio"
                            name="durations"
                            value="3"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                            onChange={radioHandleChange}
                            checked={data.amount == "3"}
                          />
                          <label
                            htmlFor="option-1"
                            className="block ml-2 text-sm font-medium text-gray-900 "
                          >
                            3 Bulan
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="option-2"
                            type="radio"
                            name="durations"
                            value="6"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                            onChange={radioHandleChange}
                          />
                          <label
                            htmlFor="option-2"
                            className="block ml-2 text-sm font-medium text-gray-900 "
                          >
                            6 Bulan
                          </label>
                        </div>
                        <div className="flex  items-center mb-4">
                          <input
                            id="option-3"
                            type="radio"
                            name="durations"
                            value="12"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                            onChange={radioHandleChange}
                          />
                          <label
                            htmlFor="option-3"
                            className="block ml-2 text-sm font-medium text-gray-900 "
                          >
                            12 Bulan
                          </label>
                        </div>
                      </div>
                      <div className="text-center flex flex-col">
                        {flash.message && (
                          <div className="p-2 bg-white rounded-lg">
                            {flash.message}
                          </div>
                        )}
                        <input
                          type="text"
                          name="voucher_name"
                          id=""
                          form="check_voucher"
                          className="w-7/12 mx-auto border-neutral-400 rounded-xl"
                          onChange={(e) => setData("voucher", e.target.value)}
                        />
                        <button
                          type="submit"
                          form="check_voucher"
                          className="border w-4/12 md:w-2/12 mx-auto mt-2 py-1 border-cyan-500"
                        >
                          check
                        </button>
                      </div>
                      <div className="text-right mr-4">Harga : Rp. {price}</div>
                      {errors.amount && (
                        <p className="text-red-500">{errors.amount}</p>
                      )}
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={(e) => {
                            setShowModal(false);
                            setData("amount", "");
                            setPrice(0);
                            errors.amount = null;
                          }}
                        >
                          Close
                        </button>
                        <button
                          className={`bg-emerald-500 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none  mr-1 mb-1 ease-linear transition-all duration-150`}
                          type="submit"
                          onClick={submit}
                        >
                          Pesan
                        </button>
                        {/* <Link
                          href="/service/checkout"
                          onClick={submit}
                          className={`bg-emerald-500 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none  mr-1 mb-1 ease-linear transition-all duration-150`}
                        >
                          Pesan
                        </Link> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </CustomersLayout>
    </>
  );
}
