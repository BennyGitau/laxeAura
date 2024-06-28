import React, { useState } from "react";
import Layout from "../components/Layout";
import Select from "react-select";

export default function Checkout() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //can add more logic to handle form submission and what to do with the data
    setIsSubmit(true);
  };
  const countries = [
    { value: "Kenya", label: "Kenya" },
    { value: "Uganda", label: "Uganda" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Rwanda", label: "Rwanda" },
    //add more countries as desired.
  ];

  return (
    <Layout>
      <h1 className="font-semibold text-2xl border-b border-slate-800 w-fit py-2 xl:py-3">
        Checkout
      </h1>
      {isSubmit ? (
        <h1>
          Thank You for shopping with us. Check your email for delivery dates
        </h1>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md grid font-semibold text-sm gap-1 xl:gap-2 xl:mt-3"
        >
          <fieldset className="grid gap-1 xl:gap-2 w-full">
            <label className="">Country*</label>
            <Select
              className="rounded-md active:border-cyan-300"
              required
              placeholder="Select Your Country"
              value={selectedCountry}
              onChange={setSelectedCountry}
              options={countries}
            />
          </fieldset>
          <fieldset className="grid gap-1 w-full">
            <label>Your Email*</label>
            <input
              className="py-1.5 px-2 border border-gray-300 rounded-md active:border-cyan-300"
              required
              type="email"
              placeholder="awesomeperson@mail.com"
            />
          </fieldset>

          <fieldset className="grid gap-1 xl:gap-2 w-full">
            <label>Address*</label>
            <input
              className="py-1.5 px-2 border border-gray-300 rounded-md active:border-cyan-300"
              required
              type="text"
              placeholder="3rd Ave, Awesome Str."
            />
          </fieldset>
          <fieldset className="grid gap-1 xl:gap-2 w-full">
            <label>Your Phone Number*</label>
            <input
              className="py-1.5 px-2 border border-gray-300 rounded-md active:border-cyan-300"
              required
              type="tel"
              placeholder="+254 7123456789"
            />
          </fieldset>
          <fieldset className="w-full">
            <label>Your Prefered Payment Method*</label>
            <select className="w-full py-1.5 px-2 border border-gray-300 rounded-md active:border-cyan-300">
              <option className="text-xs" value="Payment Method"></option>
              <option className="text-xs" value="Mpesa">
                Mpesa
              </option>
              <option className="text-xs" value="Visa">
                Visa
              </option>
              <option className="text-xs" value="masterCard">
                Mastercard
              </option>
              <option className="text-xs" value="PayPal">
                PayPal
              </option>
            </select>
          </fieldset>

          <button
            className="bg-black mt-2 border border-black text-sm text-white px-5 py-2.5 rounded-md"
            type="submit"
          >
            Submit Order
          </button>
        </form>
      )}
    </Layout>
  );
}
