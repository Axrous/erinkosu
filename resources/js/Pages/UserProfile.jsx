import CustomersLayout from "@/Layouts/CustomersLayout";
import deku from "../../../public/photos/deku1.jpg";

export default function UserProfile() {
  return (
    <CustomersLayout>
      <div className="container mx-auto border">
        <div className="flex my-80">
          <div className="w-6/12 border">
            <div className="w-6/12 mx-auto border p-5 rounded-2xl shadow-2xl">
              <img
                src={deku}
                alt="gambar"
                className=" h-52 object-cover overflow-hidden w-full"
              />
              <div className="mt-4">
                <ul>
                  <li>Nama : Arga Satya</li>
                  <li>Email : argasatya16@gmail.com</li>
                  <li>No. Telp : 087811008278</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-6/12 border"></div>
        </div>
      </div>
    </CustomersLayout>
  );
}
