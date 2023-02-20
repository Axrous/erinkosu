import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { FcOk, FcCancel } from "react-icons/fc";

export default function Service({ rooms }) {
  const [isBooked, setIsBooked] = useState(false);
  const { flash, setFlash } = usePage().props;
  const [showModal, setShowModal] = useState(flash.message);

  return (
    <>
      <Head title="Services" />
      <CustomersLayout>
        <div className="container mx-auto">
          <h1 className="text-4xl text-center mt-6 tracking-wider">
            Kamar Kost
          </h1>
          <p className="text-center text-xl mt-4">
            Di sini tersedia 2 tempat kost, yaitu Kost 1 untuk Laki-laki dan
            Kost 2 untuk Perempuan.
          </p>
          <ul className="flex justify-evenly mt-16">
            <li className="text-2xl">Kost 1</li>
            <li className="text-2xl hover:cursor-not-allowed">Kost 2</li>
          </ul>

          <div className="flex justify-evenly mt-20 flex-wrap">
            {rooms.map((room) => (
              <div className="lg:w-4/12 xl:w-3/12 mb-16" key={room.no}>
                <div className="w-8/12 shadow-xl rounded-lg mx-auto">
                  <img
                    src={room.url}
                    alt="gambar"
                    className="object-cover h-48 w-96 rounded-t-lg hover:scale-105 transition-all duration-500 overflow-hidden"
                  />
                  <div className="pl-4 pb-4 mt-4">
                    <h3 className="text-xl">Kamar No. {room.no}</h3>
                    <span className="flex ">
                      Status: {room.is_booked ? "booked" : "available"}
                      {!room.is_booked ? (
                        <FcOk className="ml-2 my-auto" />
                      ) : (
                        <FcCancel className="ml-2 my-auto" />
                      )}
                    </span>
                    <Link
                      href={`/services/${room.no}`}
                      className={`py-2 px-6 bg-black text-white rounded-lg inline-block mt-4 ${
                        room.is_booked ? "pointer-events-none opacity-25 " : ""
                      }`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
                        {flash.message}
                      </h3>
                    </div>
                    {/*body*/}
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => {
                        setShowModal(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : (
            ""
          )}
        </div>
      </CustomersLayout>
    </>
  );
}
