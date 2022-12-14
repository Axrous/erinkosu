import CustomersLayout from "@/Layouts/CustomersLayout";
import deku from "../../../public/photos/deku1.jpg";

export default function UserProfile() {
  return (
    <CustomersLayout>
      <div className="container mx-auto border">
        <div className="flex my-80">
          <div className="w-6/12 ">
            <div className="w-6/12 mx-auto p-5 rounded-2xl shadow-2xl">
              <img
                src={deku}
                alt="gambar"
                className=" h-52 object-cover overflow-hidden w-full"
              />
              <div className="mt-4">
                <h3 className="mb-6 text-xl">PROFILE</h3>
                <div className="">
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Nama Depan</span>
                    <span className="w-7/12 text-start">Arga Satya</span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Nama Belakang</span>
                    <span className="w-7/12 text-start">Mulyono</span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Email</span>
                    <span className="w-7/12 text-start">
                      argasatya16@gmail.com
                    </span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">No. HP</span>
                    <span className="w-7/12 text-start">087811008278</span>
                  </div>
                </div>
                <button className="border px-4 py-2 rounded-lg bg-[#476072] text-white">
                  Edit Profile
                </button>
                <button className="border px-4 py-2 rounded-lg bg-[#476072]  text-white ">
                  Ubah Kata Sandi
                </button>
              </div>
            </div>
          </div>
          <div className="w-6/12 border"></div>
        </div>
      </div>
    </CustomersLayout>
  );
}
