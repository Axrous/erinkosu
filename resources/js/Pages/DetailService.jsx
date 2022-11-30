import PrimaryButton from "@/Components/PrimaryButton";
import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function DetailService({ room, images }) {
  const [Image, setImage] = useState(images[0].url);

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl =
      "https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-YYeDdwZBGAL0y1vY";

    let scriptTag = document.createElement("script");
    scriptTag.setAttribute("id", "midtrans-script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-environment", "sandbox");
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
  return (
    <>
      <Head title="Kamar x" />
      <CustomersLayout>
        <div className="container mx-auto h-screen">
          <div className="w-8/12 mx-auto">
            <section className="flex mt-10">
              <div className="w-6/12">
                <div className=" border-2 rounded-2xl p-2">
                  <img
                    src={`/${Image}`}
                    alt=""
                    className=" w-full h-96 object-contain"
                  />
                </div>
                <ul className="flex mt-6">
                  {images.map((image) => {
                    return (
                      <li className="w-2/12" key={image.id}>
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
              <div className="w-6/12 border-x-2 ml-16  border-black pl-4 my-auto">
                <h2 className="text-4xl tracking-wider">Kamar No. {room.no}</h2>
                <span className="block mt-2 tracking-wider text-xl">
                  Rp. {room.price}/bulan
                </span>
                <div>
                  <span className="mt-4">Fasilitas:</span>
                  <ul className="flex flex-wrap w-10/12 ">
                    <li className="w-6/12">K. Mandi Dalam</li>
                    <li className="w-6/12">Listrik</li>
                    <li className="w-6/12">Air</li>
                    <li className="w-6/12">Kasur</li>
                    <li className="w-6/12">Lemari</li>
                    <li className="w-6/12">Meja & kursi</li>
                  </ul>
                </div>
                <div className="w-6/12 mt-10">
                  <a href={`/services/${room.no}/payment`}>Pesan sekarang</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </CustomersLayout>
    </>
  );
}
