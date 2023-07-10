import CustomersLayout from "@/Layouts/CustomersLayout";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
export default function HistoryTransactionDetail({ transaction }) {
  const [showVA, setShowVA] = useState(false);

  function date(timestamp) {
    const dateTime = new Date(timestamp * 1000);
    return dateTime;
  }

  function goBack() {}

  return (
    <CustomersLayout>
      <div className="container border border-black mx-auto h-screen flex items-center justify-center">
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50  w-full h-full pt-52 md:pt-0 px-4 md:px-0 md:p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black bg-opacity-70 flex"
        >
          <div className="relative w-full h-full max-w-2xl md:h-auto m-auto">
            {/* <!-- Modal content --> */}
            <div className="relative bg-slate-100 rounded-lg shadow ">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold">{transaction.id}</h3>
                <Link href="/services/transaction-history">
                  <button
                    type="button"
                    className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-1 space-y-6">
                <div className="py-3 px-6 bg-white">
                  <span className="uppercase font-semibold text-md">
                    {transaction.status}
                  </span>
                  <div className="flex justify-between mt-1">
                    <p>Tanggal Pemesanan</p>
                    <p>{date(transaction.booked_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="py-3 px-6 bg-white">
                  <h3 className="text-lg font-bold">Payment Info</h3>
                  <div className="border py-3 px-5 flex justify-between mt-3 rounded-xl my-2">
                    <p className="font-semibold">
                      Kamar No. {transaction.room_no}
                    </p>
                    <div className="text-end">
                      <span className="">Total Harga</span>
                      <p className="mt-1">Rp. {transaction.amount}</p>
                      <button
                        className="mt-4 border px-5 py-1 text-slate-600 border-slate-600 rounded-md"
                        onClick={(e) => setShowVA(!showVA)}
                      >
                        Bayar
                      </button>
                      {showVA ? (
                        <div className="text-right mt-2">
                          No. VA
                          <span className="bg-black text-white px-1 ml-2">
                            {transaction.va_number}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => history.back()}>Back Coy</button>
      </div>
    </CustomersLayout>
  );
}
