import React from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';

type Props = {
    tripId: number;
    handleLeg: (e: LegFormInputs) => void;
};

type LegFormInputs = {
    departureAirportId: string;
    arrivalAirportId: string;
    departureDate: string;
    arrivalDate: string;
};

const validation = Yup.object().shape({
    departureAirportId: Yup.string().required("Departure Airport Id is required"),
    arrivalAirportId: Yup.string().required("Arrival Airport Id is required"),
    departureDate: Yup.string().required("Departure Date is required").matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      "Departure Date must be in the format MM/DD/YYYY"
  ),
    arrivalDate: Yup.string().required("Arrival Date is required").matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      "Arrival Date must be in the format MM/DD/YYYY"
  ),
});

const LegForm = ({tripId, handleLeg}: Props) => {
    const { register, handleSubmit, formState: { errors }} = useForm<LegFormInputs>({ resolver: yupResolver(validation)});

  return (
    <form className="mt-4 ml-4 mr-4 mb-4 flex:0.5" onSubmit={handleSubmit(handleLeg)}>
      <input
        type="text"
        id="title"
        className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-60 p-2.5"
        placeholder="Departure Airport Id - Ex: KCVG"
        {...register("departureAirportId")}
      />
      {errors.departureAirportId ? <p>{errors.departureAirportId.message}</p> : ""}
      <input
        type="text"
        id="title"
        className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-60 p-2.5"
        placeholder="Arrival Airport Id - Ex: KSDF"
        {...register("arrivalAirportId")}
      />
      {errors.arrivalAirportId ? <p>{errors.arrivalAirportId.message}</p> : ""}
      <input
        type="text"
        id="title"
        className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-60 p-2.5"
        placeholder="Departure Date - Ex: 07/21/2024"
        {...register("departureDate")}
      />
      {errors.departureDate ? <p>{errors.departureDate.message}</p> : ""}
      <input
        type="text"
        id="title"
        className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-60 p-2.5"
        placeholder="Arrival Date - Ex: 07/22/2024"
        {...register("arrivalDate")}
      />
      {errors.arrivalDate ? <p>{errors.arrivalDate.message}</p> : ""}
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
      >
        Add Leg
      </button>
    </form>
  )
}

export default LegForm