import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import rimuru from "../../../public/photos/rimuru1.jpg";
import nero from "../../../public/photos/nero.jpg";
import paimon from "../../../public/photos/paimon.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

export default function About() {
  const properties = {
    arrows: false,
    indicators: true,
    duration: 2000,
    transitionDuration: 900,
  };
  return (
    <>
      <Head title="About Us" />
      <CustomersLayout>
        <h2 className="uppercase text-center text-4xl mt-10">pemilik kost</h2>
        <div className="flex container mx-auto mt-20 justify-evenly">
          <div className="w-3/12 ">
            <img src={rimuru} alt="" width={350} className="rounded-full" />
          </div>
          <div className="w-6/12 my-auto">
            <h3 className="text-4xl tracking-wide mb-4">Rimuru Tempest</h3>
            <p className="w-7/12 text-lg leading-normal tracking-wide">
              Rimuru adalah pendiri dan Raja dari Federasi Jura Tempest di Hutan
              Jura. Dia adalah salah satu Raja Iblis dari Octagram. Dia tinggal
              di Kota Rimuru, yang merupakan Ibu kota Federasi Tempest Jura
            </p>
          </div>
        </div>

        <section className=" bg-[#fcf3ea]  py-10 mt-20">
          <div className="container mx-auto">
            <h2 className="uppercase text-center text-4xl ">penjaga kost</h2>
            <div className="flex mt-20 text-center">
              <div className="w-6/12">
                <img
                  src={nero}
                  width={350}
                  alt=""
                  className="rounded-full mx-auto mb-8"
                />
                <h3 className="text-4xl tracking-wide mb-4">
                  Secre Swallowtail
                </h3>
                <span className="italic">-Penjaga Kost Putra-</span>
              </div>
              <div className="w-6/12">
                <img
                  src={paimon}
                  alt=""
                  width={350}
                  className="rounded-full mx-auto mb-8"
                />
                <h3 className="text-4xl tracking-wide mb-4">Clown Paimon</h3>
                <span className="italic">-Penjaga Kost Putri-</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-20 pb-20">
          <h2 className="text-4xl uppercase text-center">gallery</h2>
          <p className="text-center mt-4">
            Berikut adalah beberapa foto dari kamar dan lingkungan ErinKosu.
          </p>
          <div className="w-8/12 mx-auto mt-10">
            <Slide {...properties}>
              <div className="h-[600px]">
                <div className="bg-imgOne h-full bg-cover"></div>
              </div>
              <div className="h-[600px]">
                <div className="bg-imgOne h-full bg-cover"></div>
              </div>
              <div className="h-[600px]">
                <div className="bg-imgOne h-full bg-cover"></div>
              </div>
            </Slide>
          </div>
        </section>
      </CustomersLayout>
    </>
  );
}
