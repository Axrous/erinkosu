import PrimaryButton from "@/Components/PrimaryButton";
import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { FcOk, FcCancel } from "react-icons/fc";

export default function Service() {
  const images = [
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/user/wsanter",
    "https://source.unsplash.com/random/?room",
    "https://source.unsplash.com/random/?bedroom",
  ];
  return (
    <>
      <Head title="Services" />
      <CustomersLayout>
        <div className="container mx-auto h-screen">
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
            <div className="w-3/12 mb-16">
              <div className="w-8/12 shadow-xl rounded-lg mx-auto">
                <img
                  src={images[3]}
                  alt=""
                  className="object-cover h-48 w-96 rounded-t-lg hover:scale-105 transition-all duration-500"
                />
                <div className="pl-4 pb-4 mt-4">
                  <h3 className="text-xl">Kamar No. 1</h3>
                  <p>Luas 3 x 3</p>
                  <span className="flex">
                    Status: Available <FcOk className="ml-2 my-auto" />
                  </span>
                  <PrimaryButton className="mt-4">Detail</PrimaryButton>
                </div>
              </div>
            </div>

            <div className="w-3/12 mb-16">
              <div className="w-8/12 shadow-xl rounded-lg mx-auto">
                <img
                  src={images[2]}
                  alt=""
                  className="object-cover h-48 w-96 rounded-t-lg hover:scale-105 transition-all duration-500"
                />
                <div className="pl-4 pb-4 mt-4">
                  <h3 className="text-xl">Kamar No. 1</h3>
                  <p>Luas 3 x 3</p>
                  <span className="flex">
                    Status: Booked <FcCancel className="ml-2 my-auto" />
                  </span>
                  <PrimaryButton
                    className="mt-4 hover:cursor-not-allowed"
                    processing={true}
                  >
                    Detail
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomersLayout>
    </>
  );
}
