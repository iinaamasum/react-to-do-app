import React from 'react';
import Navbar from '../Shared/Navbar';

const MyTask = () => {
  return (
    <>
      <Navbar />
      <section
        style={{ maxWidth: '1200px', minHeight: '70vh' }}
        className="mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-accent mb-5 mt-10 md:mt-16">
          Hi ..., your all important task
        </h1>

        <div className="my-5">
          <div class="overflow-x-auto rounded-2xl">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyTask;
