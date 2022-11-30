import PrimaryButton from "@/Components/PrimaryButton";
import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { FcOk, FcCancel } from "react-icons/fc";

export default function Service({ rooms }) {
  console.log(rooms);
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
            {rooms.map((room, index) => (
              <div className="lg:w-4/12 xl:w-3/12 mb-16">
                <div className="w-8/12 shadow-xl rounded-lg mx-auto">
                  <img
                    src={room.url}
                    alt="gambar"
                    className="object-cover h-48 w-96 rounded-t-lg hover:scale-105 transition-all duration-500 overflow-hidden"
                  />
                  <div className="pl-4 pb-4 mt-4">
                    <h3 className="text-xl" key={index}>
                      Kamar No. {room.no}
                    </h3>
                    <span className="flex">
                      Status: {room.status}{" "}
                      {room.status == "available" ? (
                        <FcOk className="ml-2 my-auto" />
                      ) : (
                        <FcCancel className="ml-2 my-auto" />
                      )}
                    </span>
                    <PrimaryButton className="mt-4">
                      <a href={`/services/${room.no}`}>Detail</a>
                    </PrimaryButton>
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
