import React, { useEffect } from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
import { LegGet } from '../../../Models/Leg';
import { DateFormatService } from '../../../Services/DateFormatService';

type Props = {
    tripId: number;
    handleLeg: (e: LegFormInputs) => void;
    initialData: LegGet | null;
};

type LegFormInputs = {
    departureAirportId: string;
    arrivalAirportId: string;
    departureDate: string;
    arrivalDate: string;
};

const validation = Yup.object().shape({
    departureAirportId: Yup.string().required("Departure Airport Id is required").matches(/^[A-Za-z]{4}$/, "Departure Airport Id must be exactly 4 letters"),
    arrivalAirportId: Yup.string().required("Arrival Airport Id is required").matches(/^[A-Za-z]{4}$/, "Arrival Airport Id must be exactly 4 letters"),
    departureDate: Yup.string().required("Departure Date is required").matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      "Departure Date must be in the format MM/DD/YYYY"
  ),
    arrivalDate: Yup.string().required("Arrival Date is required").matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      "Arrival Date must be in the format MM/DD/YYYY"
  ),
});

const LegForm = ({tripId, handleLeg, initialData}: Props) => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm<LegFormInputs>({ resolver: yupResolver(validation), defaultValues: initialData || {} });

  useEffect(() => {
    if (initialData) {
        reset({
          departureAirportId: initialData.departureAirportId,
          arrivalAirportId: initialData.arrivalAirportId,
          departureDate: DateFormatService(initialData.departureDate),
          arrivalDate: DateFormatService(initialData.arrivalDate)
        }
          
        );
    } else {
        reset({ departureAirportId: '', arrivalAirportId: '', departureDate: '', arrivalDate: '' });
    }
}, [initialData, reset]);

return (
  <form className="mt-4 flex flex-col" onSubmit={handleSubmit(handleLeg)}>
    <input
      type="text"
      className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
        placeholder="Departure Date - MM/DD/YYYY"
        {...register("departureDate")}
      />
      {errors.departureDate ? <p>{errors.departureDate.message}</p> : ""}
      <input
        type="text"
        id="title"
        className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-60 p-2.5"
        placeholder="Arrival Date - MM/DD/YYYY"
        {...register("arrivalDate")}
      />
      {errors.arrivalDate ? <p>{errors.arrivalDate.message}</p> : ""}
    
      <button
          type="submit"
          className="mt-4 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
      >
          {initialData ? 'Update Leg' : 'Add Leg'}
      </button>
  </form>
)
}

export default LegForm