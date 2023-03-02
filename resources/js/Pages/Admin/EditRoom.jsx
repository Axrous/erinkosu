import AdminLayout from "@/Layouts/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import { React, useState } from "react";

export default function EditRoom({ roomPrice, roomNo, images }) {
  const { flash, setFlash } = usePage().props;
  const [newPrice, setNewPrice] = useState({
    price: roomPrice,
  });
  const { data, setData, post, process } = useForm({
    image: undefined,
  });
  function submitPrice(e) {
    e.preventDefault();
    Inertia.post(`/admin/edit-room/${roomNo}}`, newPrice);
  }
  function addImage(e) {
    e.preventDefault();
    post(`/admin/add-image/${roomNo}`);
  }
  function deleteImage(e, imageId) {
    e.preventDefault();
    Inertia.delete(`/admin/delete-image/${imageId}`);
  }
  return (
    <>
      <Head title="Edit Room" />
      <AdminLayout>
        <div className="p-4 mx-auto w-8/12">
          <h1 className="m-4 mb-10 text-2xl">Kamar No. 1</h1>
          <h3 className="my-2 p-1 pl-4 bg-green-300 rounded-xl">
            {flash.message}
          </h3>
          <form
            className="p-4 border-b mb-4 rounded-lg shadow-xl mt-4"
            onSubmit={submitPrice}
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="floating_price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={newPrice.price}
                required
                onChange={(e) => setNewPrice({ price: e.target.value })}
              />
              <label
                htmlFor="floating_price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Harga Kamar
              </label>
            </div>
            <button
              className="bg-blue-500 text-gray-200 px-5 py-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
          <form onSubmit={addImage}>
            <div className="mb-4 flex flex-row">
              <input
                className="block px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="user_avatar"
                type="file"
                onChange={(e) => setData("image", e.target.files[0])}
              />
              <button
                className="px-7 ml-6 bg-blue-500 rounded-lg text-gray-200"
                on
              >
                Add
              </button>
            </div>
          </form>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {images.map((image) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={image.id}
                  >
                    <td className="p-4">
                      <img
                        src={`../../${image.url}`}
                        alt="Apple Watch"
                        className="w-40"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        onClick={(e) => deleteImage(e, image.id)}
                        disabled={images.length <= 1}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
