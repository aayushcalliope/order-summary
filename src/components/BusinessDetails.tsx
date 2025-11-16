const BusinessDetails = () => {
  return (
    <div className="flex xl:w-[40%] max-xl:w-full mt-20 flex-col p-3 border-2 border-gray-300 rounded-[20px]">
      <h1 className="text-2xl font-bold mb-6 h-[5%]">Business Details</h1>
      <form action="" className="flex flex-col h-[95%] justify-between">
        <div>
          <div className="space-y-6 flex-col flex mb-6">
            <label className="font-semibold">Business Name</label>
            <input
              className="border-2 border-gray-300 focus:ring-3 focus:ring-blue-500 rounded-[10px] p-2 focus:outline-gray-300"
              type="text"
              placeholder="Enter your business name"
            />
          </div>

          <div className="flex items-center space-x-3 mb-6 w-full">
            <div className="flex flex-col space-y-4 w-[50%] max-sm:w-[30%]">
              <label className="font-semibold">Country</label>
              <select
                className="border-2 border-gray-300 focus:ring-3 focus:ring-blue-500 rounded-[10px] p-2 focus:outline-gray-300"
                id="country"
                name="country"
              >
                <option value="np">Nepal</option>
                <option value="in">India</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>
            <div className="flex flex-col space-y-4 w-[50%] max-sm:w-[70%]">
              <label className="font-semibold"> Contact Number</label>
              <input
                type="text"
                className="border-2 border-gray-300 focus:ring-3 focus:ring-blue-500 rounded-[10px] p-2 focus:outline-gray-300"
                placeholder="+977 9800000000"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6 space-y-4">
            <label>
              <span className="font-semibold">Email</span> (optional)
            </label>
            <input
              className="border-2 border-gray-300 focus:ring-3 focus:ring-blue-500 rounded-[10px] p-2 focus:outline-gray-300"
              type="email"
              placeholder="your @email.com"
            />
          </div>
        </div>
        <div className="flex space-x-2 w-full">
          <button className="border-2 border-gray-300 rounded-[10px] p-3 font-medium w-[10%] max-sm:w-[20%] max-sm:text-[14px]">
            Back
          </button>

          <button className="bg-indigo-400 flex justify-center items-center space-x-2 w-[90%] max-sm:w-[80%] p-3 rounded-[10px]">
            <span className="text-white font-semibold max-sm:text-[14px]">
              Complete Registration
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 max-sm:size-4 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessDetails;
