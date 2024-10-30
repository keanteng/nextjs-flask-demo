export default function ModelForm() {
  return (
    <form>
      <div className="border border-stone-400 border-dashed rounded-md shadow-sm"> 
        <div className="p-6">
          <div className="gap-1 flex flex-col">
            <h1 className="text-xl font-semibold text-stone-700">Spaceship Titanic Prediction</h1>
            <p className="text-sm text-stone-500">Enter the details</p>
            <hr className="border-t border-stone-400 my-4"></hr>
          </div>

          <div className="mb-4">
            <label htmlFor="HomePlanet" className="block mb-2 text-stone-500 text-sm">Home Planet</label>
            <div className="relative">
              <select id="HomePlanet" name="HomePlanet" className="text-stone-700 text-sm rounded-md p-2 w-full appearance-none bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500">
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
            <div className="flex items-center">
              <input type="radio" id="cryoYes" name="CryoSleep" value="Yes" className="mr-2 text-stone-700 focus:ring-stone-500" />
              <label htmlFor="cryoYes" className="mr-4 text-stone-700">Yes</label>
              <input type="radio" id="cryoNo" name="CryoSleep" value="No" className="mr-2 text-stone-700 focus:ring-stone-500" />
              <label htmlFor="cryoNo" className="text-stone-700">No</label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="Destination" className="block mb-2 text-stone-500 text-sm">Destination</label>
            <div className="relative">
              <select id="Destination" name="Destination" className="text-stone-700 text-sm rounded-md p-2 w-full appearance-none bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500">
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
            id='age'
            className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
            placeholder="Enter your age"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-stone-500 text-sm">VIP</label>
            <div className="flex items-center">
              <input type="radio" id="vipYes" name="VIP" value="Yes" className="mr-2 text-stone-700 focus:ring-stone-500" />
              <label htmlFor="vipYes" className="mr-4 text-stone-700">Yes</label>
              <input type="radio" id="vipNo" name="VIP" value="No" className="mr-2 text-stone-700 focus:ring-stone-500" />
              <label htmlFor="vipNo" className="text-stone-700">No</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-stone-500 text-sm">Room Service</label>
            <input 
            type="number"
            id='age'
            className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
            placeholder="Enter your age"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-stone-500 text-sm">Age</label>
            <input 
            type="number"
            id='age'
            className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
            placeholder="Enter your age"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-stone-500 text-sm">Age</label>
            <input 
            type="number"
            id='age'
            className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
            placeholder="Enter your age"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-stone-500 text-sm">Age</label>
            <input 
            type="number"
            id='age'
            className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
            placeholder="Enter your age"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-stone-500 text-sm">Age</label>
            <input 
            type="number"
            id='age'
            className="focus:ring-stone-500 text-sm p-2 rounded-md w-full"
            placeholder="Enter your age"
            />
          </div>

        </div>
      </div>
    </form>
  )
}