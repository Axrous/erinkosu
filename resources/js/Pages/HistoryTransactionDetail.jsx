import CustomersLayout from "@/Layouts/CustomersLayout";
import { useState } from "react";
export default function HistoryTransactionDetail({ transaction }) {
  const [showVA, setShowVA] = useState(false);

  function date(time) {
    const dateTime = new Date(time * 1000).toLocaleDateString();
    return dateTime;
  }
  return (
    <CustomersLayout>
      <div className="container border border-black mx-auto h-screen flex items-center justify-center">
        <div className="w-7/12 border p-4 border-teal-400 rounded-3xl relative">
          <h2 className="text-center mb-4">{transaction.id}</h2>
          <div className="flex justify-between mx-auto items-center">
            <h3 className="">{date(transaction.booked_at)}</h3>
            <span className="py-2 px-5 bg-yellow-400 rounded-2xl uppercase">
              {transaction.status}
            </span>
          </div>
          <div className=" items-center mt-10">
            <h3 className="text-3xl">Kamar No. {transaction.room_no}</h3>
            <h4 className="text-2xl">Rp. {transaction.amount}</h4>
          </div>
          <div className="flex flex-row-reverse">
            <button
              className="py-2 px-7 border my-5 mr-4 rounded-md border-black"
              onClick={(e) => setShowVA(!showVA)}
            >
              Bayar
            </button>
          </div>
          {showVA ? (
            <div className="text-right">
              <span>{transaction.va_number}</span>
            </div>
          ) : null}
        </div>
        <button onClick={() => history.back()}>Back Coy</button>
      </div>
    </CustomersLayout>
  );
}
