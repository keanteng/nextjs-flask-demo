'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ModelForm() {
  const [prediction, setPrediction] = useState<string | null>(null)
  const [isFormVisible, setIsFormVisible] = useState(true);
  const {
    handleSubmit,
    register,
    reset
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      //console.log(data);
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setPrediction(result.Transported);
      setIsFormVisible(false)
    } catch (error) {
      console.error('Error during fetch:', error);
      // Optionally, you can set an error state here to display an error message to the user
    }
  };

  const resetForm = () => {
    setPrediction(null);
    setIsFormVisible(true);
    reset();
  }

  return (
    <div>
      {isFormVisible ? (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-stone-400 border-dashed rounded-md shadow-lg"> 
          <div className="p-6">
            <div className="gap-1 flex flex-col">
              <h1 className="text-xl font-semibold text-stone-700">Spaceship Titanic Prediction</h1>
              <p className="text-sm text-stone-500">Enter your details for prediction</p>
              <hr className="border-t border-stone-400 my-4"></hr>
            </div>

            <div className="mb-4">
              <label htmlFor="HomePlanet" className="block mb-2 text-stone-500 text-sm">Home Planet</label>
              <div className="relative">
                <select id="HomePlanet" {... register('HomePlanet')} name="HomePlanet" className="text-stone-700 text-sm rounded-md p-2 w-full appearance-none bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500" required>
                  <option value="">Select your home planet</option>
                  <option value="Mars">Mars</option>
                  <option value="Moon">Moon</option>
                  <option value="Jupiter">Jupiter</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-stone-500 text-sm">CryoSleep</label>
              <div className="relative">
                <select id="CryoSleep" {... register('CryoSleep')} name="CryoSleep" className="text-stone-700 text-sm rounded-md p-2 w-full appearance-none bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500" required>
                  <option value="">Select your sleep status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="Destination" className="block mb-2 text-stone-500 text-sm">Destination</label>
              <div className="relative">
                <select id="Destination" {...register('Destination')} name="Destination" className="text-stone-700 text-sm rounded-md p-2 w-full appearance-none bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500" required>
                  <option value="">Select your destination</option>
                  <option value="Demon">Demon</option>
                  <option value="Heaven">Heaven</option>
                  <option value="Elf">Elf</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-stone-500 text-sm">Age</label>
              <input 
              type="number"
              id='Age'
              {...register('Age')}
              className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
              placeholder="Enter your age"
              required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-stone-500 text-sm">VIP</label>
              <div className="relative">
                <select id="VIP" {... register('VIP')} name="VIP" className="text-stone-700 text-sm rounded-md p-2 w-full appearance-none bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500" required>
                  <option value="">Select your VIP status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-stone-500 text-sm">Room Service</label>
              <input 
              type="number"
              id='RoomService'
              {...register('RoomService')}
              className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
              placeholder="Enter your room service expenses"
              required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-stone-500 text-sm">Food Court</label>
              <input 
              type="number"
              id='FoodCourt'
              {...register('FoodCourt')}
              className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
              placeholder="Enter your food court expenses"
              required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-stone-500 text-sm">Shopping Mall</label>
              <input 
              type="number"
              id='ShoppingMall'
              {...register('ShoppingMall')}
              className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
              placeholder="Enter your shopping expenses"
              required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-stone-500 text-sm">Spa</label>
              <input 
              type="number"
              id='Spa'
              {...register('Spa')}
              className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
              placeholder="Enter your spa expenses"
              required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-stone-500 text-sm">VRDeck</label>
              <input 
              type="number"
              id='VRDeck'
              {...register('VRDeck')}
              className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
              placeholder="Enter your vrdeck expenses"
              required
              />
            </div>

            <div className="mt-6 flex justify-end mr-3">
              <button 
                type='submit'
                className="bg-stone-700 text-stone-100 p-2 rounded-md shadow-md hover:bg-stone-600"
              >
                Submit Details
              </button>
            </div>

          </div>
        </div>
      </form>
      ): (
        <div className="border border-stone-400 border-dashed rounded-md shadow-lg p-6">
          <h1 className="text-xl font-semibold text-stone-700">Prediction Result</h1>
          <p className="text-md text-stone-500 mt-4">Your Transported Status: {prediction !== null ? prediction.toString().toUpperCase() : 'No prediction available.'}</p>
          <div className="mt-6 flex justify-end">
            <button 
              onClick={resetForm}
              className="bg-stone-700 text-stone-100 p-2 rounded-md shadow-md hover:bg-stone-600"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}