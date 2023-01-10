import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { FcOk, FcCancel } from "react-icons/fc";

export default function Service({ rooms }) {
  const [isBooked, setIsBooked] = useState(false);

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
                    <span className="flex">
                      Status: {room.isbook ? "booked" : "available"}
                      {!room.is_booked ? (
                        <FcOk className="ml-2 my-auto" />
                      ) : (
                        <FcCancel className="ml-2 my-auto" />
                      )}
                    </span>
                    <a
                      href={`/services/${room.no}`}
                      className={`py-2 px-6 bg-black text-white rounded-lg inline-block mt-4 ${
                        room.is_booked ? "pointer-events-none opacity-25 " : ""
                      }`}
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomersLayout>
    </>
  );
}
