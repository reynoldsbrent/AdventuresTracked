import React from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    handleTrip: (e: TripFormInputs) => void;
};

type TripFormInputs = {
    tripName: string;
    startDate: string;
    endDate: string;
};

const validation = Yup.object().shape({
    tripName: Yup.string().required("Trip Name is required"),
    startDate: Yup.string().required("Start Date is required").matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      "Start Date must be in the format MM/DD/YYYY"
    ),
    endDate: Yup.string().required("End Date is required").matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      "End Date must be in the format MM/DD/YYYY"
    ),
});

const AddTripModal = ({ isOpen, onClose, handleTrip }: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TripFormInputs>({ 
        resolver: yupResolver(validation)
    });

    const onSubmit = (data: TripFormInputs) => {
        handleTrip(data);
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Add New Trip</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Trip Name"
                        {...register("tripName")}
                    />
                    {errors.tripName && <p className="text-red-500 text-sm mb-2">{errors.tripName.message}</p>}

                    <input
                        type="text"
                        className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Start Date- MM/DD/YYYY"
                        {...register("startDate")}
                    />
                    {errors.startDate && <p className="text-red-500 text-sm mb-2">{errors.startDate.message}</p>}

                    <input
                        type="text"
                        className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="End Date - MM/DD/YYYY"
                        {...register("endDate")}
                    />
                    {errors.endDate && <p className="text-red-500 text-sm mb-2">{errors.endDate.message}</p>}

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                        >
                            Add Trip
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTripModal