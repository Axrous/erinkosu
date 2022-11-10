import CustomersLayout from "@/Layouts/CustomersLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function DetailService() {
  const images = [
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/user/wsanter",
    "https://source.unsplash.com/random/?room",
    "https://source.unsplash.com/random/?bedroom",
  ];

  // const [Image, setImage] = useState(images[0]);

  return (
    <>
      <Head title="Kamar x" />
      <CustomersLayout>
        <div className="container mx-auto">
          <div className="w-8/12 mx-auto border-b-2 border-grey mt-8">
            <BsArrowLeft size={35} />
          </div>
        </div>
      </CustomersLayout>
    </>
  );
}
