import CustomersLayout from "@/Layouts/CustomersLayout";

export default function UserProfile({ user, transaction }) {
  function unixConvert(unix) {
    const date = new Date(unix * 1000).toLocaleDateString();
    return date;
  }
  return (
    <CustomersLayout>
      <div className="container mx-auto">
        <div className="flex mt-20 flex-col lg:flex-row">
          <div className="w-11/12 md:w-6/12 lg:w-7/12 mx-auto mb-10">
            <div className="w-full lg:w-7/12 mx-auto p-5 rounded-2xl shadow-2xl">
              <img
                src={`../../../storage/users/${user.photo_profile}`}
                alt="gambar"
                className=" h-52 object-cover overflow-hidden w-full object-top"
              />
              <div className="mt-4">
                <h3 className="mb-6 text-xl">PROFILE</h3>
                <div className="">
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Nama Depan</span>
                    <span className="w-7/12 text-start">{user.first_name}</span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Nama Belakang</span>
                    <span className="w-7/12 text-start">{user.last_name}</span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">Email</span>
                    <span className="w-7/12 text-start">{user.email} </span>
                  </div>
                  <div className="flex border-b-2 pb-1 mb-3">
                    <span className="w-5/12 ">No. HP</span>
                    <span className="w-7/12 text-start">
                      {user.phone_number}
                    </span>
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
          <div className="mx-auto w-10/12 lg:w-6/12 mb-10">
            <div className="lg:w-10/12 border rounded-2xl shadow-xl pb-7">
              <h3 className="text-2xl text-center my-4">Kamar Kost</h3>
              <div className="flex border-b-2 pb-1 mb-3 w-8/12 mx-auto">
                <span className="w-8/12">Kamar No. </span>
                <span className="w-4/12 text-start">{transaction.room_no}</span>
              </div>
              <div className="flex border-b-2 pb-1 mb-3 w-8/12 mx-auto">
                <span className="w-8/12">Tanggal Pemesanan </span>
                <span className="w-4/12 text-start">
                  {unixConvert(transaction.booked_at)}
                </span>
              </div>
              <div className="flex border-b-2 pb-1 mb-3 w-8/12 mx-auto">
                <span className="w-8/12">Tanggal Berakhir </span>
                <span className="w-4/12 text-start">
                  {unixConvert(transaction.booked_until)}
                </span>
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
