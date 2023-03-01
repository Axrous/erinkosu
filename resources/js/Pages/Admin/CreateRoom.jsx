import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import { React } from "react";

export default function CreateRoom() {
  const { data, setData, post, processing, errors } = useForm({
    no: "",
    price: "",
    images: [],
  });

  function submit(e) {
    e.preventDefault();
    post("/admin/create-room");
  }

  return (
    <>
      <Head title="Create Room" />
      <AdminLayout>
        <div className="m-4 p-10 border w-8/12 mx-auto">
          <form onSubmit={submit} encType="multipart/form-data">
            <div className="mb-6">
              <label
                for="room"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nomor Kamar
              </label>
              <input
                type="text"
                id="room"
                value={data.no}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setData("no", e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Harga
              </label>
              <input
                type="text"
                id="price"
                value={data.price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setData("price", e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="user_avatar"
              >
                Upload file
              </label>
              <input
                className=" p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                multiple="multiple"
                onChange={(e) => setData("images", e.target.files)}
              />
              <div
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="user_avatar_help"
              >
                Foto keaadan kamar kos
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </>
  );
}
