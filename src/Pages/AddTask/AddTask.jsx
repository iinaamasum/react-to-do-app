import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Shared/Navbar';

const AddTask = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <div class="card w-full md:w-1/2 bg-base-100 shadow-lg mx-auto my-10">
        <div class="card-body">
          <h2 class="card-title mx-auto text-4xl">Add New Task</h2>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full">
              <label class="">
                <span class="text-secondary font-semibold text-lg">
                  Task Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is Required !!!',
                  },
                })}
              />
              <label class="level font-bold">
                {errors.name?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full mt-4">
              <label class="">
                <span class="text-secondary font-semibold text-lg">
                  Task Description
                </span>
              </label>

              <textarea
                cols="30"
                rows="5"
                type="text"
                placeholder="Enter your feedback"
                style={{ border: '1px solid #0FCFEC' }}
                className="rounded-lg p-3 focus:outline-offset-2 resize-none focus:ring-inset input-bordered input-primary w-full"
                {...register('des', {
                  required: {
                    value: true,
                    message: 'Description is Required !!!',
                  },
                })}
              ></textarea>

              <label class="level font-bold">
                {errors.des?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.des.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn btn-accent my-3 w-full tracking-wider capitalize text-xl mt-5"
              value="Add Task"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;
