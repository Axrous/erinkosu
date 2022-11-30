import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import yor from "../../../public/photos/yor2.jpg";
import nero from "../../../public/photos/nero.jpg";
import paimon from "../../../public/photos/paimon.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsFillPinMapFill,
} from "react-icons/bs";

export default function About({ images }) {
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
        <h2 className="uppercase text-center text-4xl mt-20">pemilik kost</h2>
        <div className="container mx-auto px-10 lg:px-0">
          <div className="flex flex-col md:flex-row lg:w-10/12 mx-auto mt-10 md:mt-16 border rounded-3xl shadow-2xl drop-shadow-xl">
            <div className="md:w-5/12">
              <img
                src={yor}
                alt=""
                className="rounded-t-3xl md:rounded-l-3xl"
              />
            </div>
            <div className="md:w-7/12 lg:w-6/12 my-auto md:pl-10 xl:pl-20 px-2 pb-4 md:px-0">
              <h3 className=" text-center md:text-left text-4xl tracking-wide mb-4">
                Yor Forger
              </h3>
              <p className="text-center text-lg leading-normal tracking-wide">
                Yor is a very beautiful, graceful and fairly tall young woman
                with fair skin, long black hair, and upturned red eyes. She
                splits her hair into two parts and crosses it over her head,
                securing it with a headband and forming two thick locks of hair
                that reach below her chest.
              </p>
            </div>
          </div>
        </div>

        <section className=" bg-[#EEE]  py-4 md:py-10 mt-20">
          <div className="container mx-auto">
            <h2 className="uppercase text-center text-4xl ">penjaga kost</h2>
            <div className="flex flex-col md:flex-row mt-10 md:mt-20 text-center justify-evenly align-middle">
              <div className="md:w-4/12 lg:w-6/12 flex md:block mb-2">
                <img
                  src={nero}
                  width={350}
                  alt=""
                  className="rounded-full mx-auto md:mb-8 w-4/12 md:w-10/12 lg:w-6/12"
                />
                <div className="my-auto md:my-0 mx-auto md:mx-0 w-6/12 md:w-full">
                  <h3 className="text-2xl md:text-4xl tracking-wide md:mb-4">
                    Secre Swallowtail
                  </h3>
                  <span className="italic">-Penjaga Kost Putra-</span>
                </div>
              </div>
              <div className="md:w-4/12 lg:w-6/12 flex md:block mb-2">
                <img
                  src={paimon}
                  alt=""
                  width={350}
                  className="rounded-full mx-auto md:mb-8 w-4/12 md:w-10/12 lg:w-6/12"
                />
                <div className="my-auto md:my-0 mx-auto md:mx-0 w-6/12 md:w-full">
                  <h3 className="text-2xl md:text-4xl tracking-wide md:mb-4">
                    Clown Paimon
                  </h3>
                  <span className="italic">-Penjaga Kost Putri-</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-20 pb-20">
          <h2 className="text-4xl uppercase text-center">gallery</h2>
          <p className="text-center mt-4">
            Berikut adalah beberapa foto kamar dan lingkungan sekitar ErinKosu.
          </p>
          <div className="w-10/12 xl:w-8/12 mx-auto mt-10">
            <Slide {...properties}>
              {images.map((image, index) => {
                return (
                  <div className="h-[600px]" key={index}>
                    <div
                      style={{ backgroundImage: `url(${image.url})` }}
                      className="h-full bg-cover bg-center"
                    ></div>
                  </div>
                );
              })}
            </Slide>
          </div>
        </section>

        <section className="md:h-96 bg-[#548CA8] md:mb-20 container mx-auto md:px-10 lg:px-0 relative">
          <div className="flex h-full flex-col-reverse md:flex-row items-center">
            <div className="md:w-6/12 lg:pl-20 tracking-wider text-white mt-10 pb-4 md:my-auto md:pb-0 px-10">
              <h3 className="text-4xl mb-6">Get In Touch!</h3>
              <ul>
                <li className="flex items-center mb-3">
                  <BsFillTelephoneFill className="mr-4" /> +6287811008278
                </li>
                <li className="flex items-center mb-3">
                  <BsEnvelopeFill className="mr-4" /> argasatya16@gmail.com
                </li>
                <li className="flex items-center mb-3">
                  <BsFillPinMapFill className="mr-4" /> Jl. Kenangan no. 10 &
                  Jl. Kekasih no. 3 Garut.
                </li>
              </ul>
            </div>
            <div className="md:w-6/12 lg:w-5/12 h-[450px] bg-white rounded-sm drop-shadow-2xl">
              <div className="w-11/12 mx-auto mt-10">
                <h3 className="text-2xl uppercase text-center">
                  Say Something :)
                </h3>
                <form action="post" className="text-center">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your Name..."
                    className="w-10/12 border-[#B2C8DF] mt-6"
                  />
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your Email..."
                    className="w-10/12 border-[#B2C8DF] mt-6"
                  />
                  <textarea
                    name=""
                    id=""
                    rows={4}
                    placeholder="Message.."
                    className="mt-6 w-10/12 border-[#B2C8DF] resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-10/12 border text-white text-xl p-2 bg-[#B2C8DF] hover:bg-[#334257]"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </CustomersLayout>
    </>
  );
}
