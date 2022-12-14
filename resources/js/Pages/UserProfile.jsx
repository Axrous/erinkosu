import CustomersLayout from "@/Layouts/CustomersLayout";
import profilePicture from "../../../public/photos/jojo.jpg";

export default function UserProfile() {
  return (
    <CustomersLayout>
      <div className="container mx-auto">
        <div className="flex mt-20">
          <div className="w-6/12 ">
            <div className="w-6/12 mx-auto p-5 rounded-2xl shadow-2xl">
              <img
                src={profilePicture}
                alt="gambar"
                className=" h-52 object-cover overflow-hidden w-full object-top"
              />
              <div className="mt-4">
                <h3 className="mb-6 text-xl">PROFILE</h3>
                <div className="">
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Nama Depan</span>
                    <span className="w-7/12 text-start">Kujo</span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Nama Belakang</span>
                    <span className="w-7/12 text-start">Jotaro</span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Email</span>
                    <span className="w-7/12 text-start">
                      starplatinum@gmail.com
                    </span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">No. HP</span>
                    <span className="w-7/12 text-start">123123123123</span>
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
          <div className="w-6/12">
            <div className="w-10/12 border rounded-2xl shadow-xl pb-7">
              <h3 className="text-2xl text-center my-4">Kamar Kost</h3>
              <div className="flex border-b-2 pb-1 mb-3 w-8/12 mx-auto">
                <span className="w-8/12">Kamar No. </span>
                <span className="w-4/12 text-start">1</span>
              </div>
              <div className="flex border-b-2 pb-1 mb-3 w-8/12 mx-auto">
                <span className="w-8/12">Tanggal Pemesanan </span>
                <span className="w-4/12 text-start">12-12-2022</span>
              </div>
              <div className="flex border-b-2 pb-1 mb-3 w-8/12 mx-auto">
                <span className="w-8/12">Tanggal Berakhir </span>
                <span className="w-4/12 text-start">12-01-2023</span>
              </div>
              <div className="w-10/12 text-end">
                <button className="border px-4 py-2 rounded-lg bg-[#476072] text-white">
                  Perpanjangan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomersLayout>
  );
}
