import React, { useEffect } from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
import { JournalGet } from '../../../Models/Journal';

type Props = {
    tripId: number;
    handleJournal: (e: JournalFormInputs) => void;
    initialData: JournalGet | null;
    
};

type JournalFormInputs = {
    title: string;
    entry: string;
};

const validation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    entry: Yup.string().required("Entry is required")
});

const JournalForm = ({tripId, handleJournal, initialData}: Props) => {
    
    const { register, handleSubmit, formState: { errors }, reset} = useForm<JournalFormInputs>({ resolver: yupResolver(validation), defaultValues: initialData || {} });

    useEffect(() => {
      if (initialData) {
          reset(initialData);
      } else {
          reset({ title: '', entry: '' });
      }
  }, [initialData, reset]);

    return (
      <form className="mt-4 flex flex-col" onSubmit={handleSubmit(handleJournal)}>
        <input
          type="text"
          id="title"
          className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Title"
          {...register("title")}
        />
        {errors.title ? <p>{errors.title.message}</p> : ""}
        <textarea
          id="entry"
          rows={6}
          className="mb-3 bg-slate-100 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Entry"
          {...register("entry")}
        ></textarea>
        {errors.entry ? <p>{errors.entry.message}</p> : ""}
        <button
                type="submit"
                className="mt-4 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
                {initialData ? 'Update Journal' : 'Add Journal'}
            </button>
      </form>
    )
}

export default JournalForm