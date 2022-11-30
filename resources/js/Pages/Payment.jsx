import CustomersLayout from "@/Layouts/CustomersLayout";
import React, { useEffect } from "react";

export default function Payment() {
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

  var cardData = {
    card_number: 4811111111111114,
    card_exp_month: 11,
    card_exp_year: 2025,
    card_cvv: 123,
  };

  // callback functions
  var options = {
    onSuccess: function (response) {
      // Success to get card token_id, implement as you wish here
      console.log("Success to get card token_id, response:", response);
      var token_id = response.token_id;

      console.log("This is the card token_id:", token_id);
      // Implement sending the token_id to backend to proceed to next step
    },
    onFailure: function (response) {
      // Fail to get card token_id, implement as you wish here
      console.log("Fail to get card token_id, response:", response);

      // you may want to implement displaying failure message to customer.
      // Also record the error message to your log, so you can review
      // what causing failure on this transaction.
    },
  };

  // MidtransNew3ds.getCardToken(cardData, options);
  return (
    <CustomersLayout>
      <h1>Cocok gann1</h1>
    </CustomersLayout>
  );
}
