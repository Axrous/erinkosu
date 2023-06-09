import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import CustomersLayout from "@/Layouts/CustomersLayout";
// import heroImage from "../../../public/build/assets/anime-tidur.png";
// import inviteImage from "../../../public/build/assets/letmein.png";
import PrimaryButton from "@/Components/PrimaryButton";
import {
  BsArrowRight,
  BsBuilding,
  BsGenderAmbiguous,
  BsFillDoorOpenFill,
} from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import { ImEnlarge2 } from "react-icons/im";
import { MdAttachMoney } from "react-icons/md";

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />
      <CustomersLayout>
        <div className="">
          <div className="container mx-auto flex mt-10 lg:mt-24 2xl:px-0 px-10 lg:flex-row flex-col-reverse">
            <div className="w-full lg:w-6/12 my-auto lg:text-left text-center">
              <h1 className="text-4xl md:text-6xl mb-4 leading-snug">
                Rebahan 24/7? <br />
                Siapa bilang gabisa.
              </h1>
              <p className="w-full md:w-10/12 xl:w-8/12 lg:mx-0 mx-auto">
                Daripada di rumah terus keliatan beban & dimarahin Orang Tua,
                mending nge-kost bisa rebahan sepuasnya 24/7. Tapi bayar ya!
                hehehe.
              </p>
              <PrimaryButton className="mt-8">
                <Link href="#advantage">Selengkapnya</Link>
                <BsArrowRight size={20} className="ml-2" />
              </PrimaryButton>
            </div>
            <div className="lg:w-6/12 ">
              <img src="" />
            </div>
          </div>

          <section className="xl:rounded-2xl w-full text-center mt-20 bg-[#EEEEEE] container mx-auto">
            <h2 className="text-4xl tracking-wider py-2">MaeKos!</h2>
            <p className="w-full md:w-10/12 lg:w-7/12 mx-auto leading-normal italic mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              itaque rem, delectus architecto debitis quam neque animi
              asperiores at sed veritatis doloremque deleniti, vero quaerat
              perspiciatis est accusamus quasi ex.
            </p>
            <span className="inline-block pb-2">-Pemilik Kost</span>
          </section>

          <section className="pt-28 mb-20 container mx-auto" id="advantage">
            <div className="text-center border-b-2 pb-4">
              <h2 className="text-4xl mb-2 tracking-wide">
                Kenapa harus MaeKos?
              </h2>
              <p className="text-lg">
                Ada banyak keuntungan kalau kamu nge-kost di MaeKos! Apa aja sih
                keuntungannya?
              </p>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row  justify-evenly mt-16">
              <div className="md:w-5/12 lg:w-3/12 text-center rounded-xl shadow-xl bg-[#EEEEEE] py-10 m-4">
                <div className="flex justify-center">
                  <BsBuilding size={70} />
                </div>
                <h3 className="mt-4 text-xl">Dekat dengan Universitas.</h3>
                <p className="mt-4 text-base w-11/12 mx-auto">
                  MaeKos dekat dengan salah satu Universitas terkenal di Isekai,
                  sangat cocok untuk para mahasiswa yang berkuliah di
                  Universitas tersebut.
                </p>
              </div>
              <div className="md:w-5/12 lg:w-3/12 text-center rounded-xl shadow-xl bg-[#EEEEEE] py-10 m-4">
                <div className="flex justify-center">
                  <BsGenderAmbiguous size={70} />
                </div>
                <h3 className="mt-4 text-xl">Kost Gender Terpisah</h3>
                <p className="mt-4 text-base w-11/12 mx-auto">
                  Harus dipisah dong, kan bukan muhrim. biar tidak canggung
                  juga.
                </p>
              </div>
              <div className="md:w-5/12 lg:w-3/12 text-center rounded-xl shadow-xl bg-[#EEEEEE] py-10 m-4">
                <div className="flex justify-center">
                  <BiBath size={70} />
                </div>
                <h3 className="mt-4 text-xl">Kamar Mandi Dalam</h3>
                <p className="mt-4 text-base w-11/12 mx-auto">
                  Ini nih, yang paling mantap kalau nge-kost itu kamar mandinya
                  di dalem.
                </p>
              </div>
              <div className="md:w-5/12 lg:w-3/12 text-center rounded-xl shadow-xl bg-[#EEEEEE] py-10 m-4">
                <div className="flex justify-center">
                  <ImEnlarge2 size={70} />
                </div>
                <h3 className="mt-4 text-xl">Luasnya 3x3</h3>
                <p className="mt-4 text-base w-11/12 mx-auto">
                  Beuh ini sih udah pas banget, bisa naro banyak barang
                  contohnya PC, Tv, Lemari, Dokumen Super Semar, dll.
                </p>
              </div>
              <div className="md:w-5/12 lg:w-3/12 text-center rounded-xl shadow-xl bg-[#EEEEEE] py-10 m-4">
                <div className="flex justify-center">
                  <MdAttachMoney size={70} />
                </div>
                <h3 className="mt-4 text-xl">Harga Murah</h3>
                <p className="mt-4 text-base w-11/12 mx-auto">
                  Siapa sih ya kan yang gamau nge-kost dengan harga murah? coba
                  bayangin kamu cuman perlu bayar mulai dari Rp. XXX udah bisa
                  tidur 24/7 tanpa kendala.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#548CA8] text-white py-20">
            <div className="container mx-auto flex md:flex-row flex-col justify-evenly lg:justify-center px-10 xl:px-0">
              <div className="md:w-5/12">
                <img
                  src=""
                  alt=""
                  className="w-full lg:w-3/4 xl:w-2/3 mx-auto"
                />
              </div>
              <div className="mt-10 md:mt-0 md:w-5/12 h-full my-auto">
                <h2 className="text-4xl text-center tracking-wider mx-auto md:mx-0 mb-10 border-x-2 md:w-10/12 xl:w-7/12 2xl:w-6/12">
                  Tunggu Apalagi!
                </h2>
                <p className="w-full xl:w-2/3 text-base leading-relaxed mb-10">
                  Ayo Nge-Kost di MaeKos, Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quos, eos commodi animi tempora illum,
                  expedita sed ratione quidem cum in quo recusandae natus ab
                  iste aperiam facilis.
                </p>

                <PrimaryButton>
                  pesan kamar <BsFillDoorOpenFill className="ml-4" />
                </PrimaryButton>
              </div>
            </div>
          </section>
        </div>
      </CustomersLayout>
    </>
  );
}
