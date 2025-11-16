import BusinessDetails from './BusinessDetails';
import SubscriptionDuration from './SubscriptionDuration';
function OrderSummary() {
  interface businessFeature {
    Name: string;
    Earning: string;
  }
  const feature: businessFeature[] = [
    {
      Name: 'Conversion Tracking',
      Earning: '5.00'
    },
    {
      Name: 'Ad platform Integration',
      Earning: '5.00'
    },
    {
      Name: 'Team Collaboration',
      Earning: '5.00'
    },
    {
      Name: 'Calendar',
      Earning: '5.00'
    },
    {
      Name: 'Approval Workflow',
      Earning: '5.00'
    },
    {
      Name: 'Digital Asset Management',
      Earning: '5.00'
    },
    {
      Name: 'Client Reporting',
      Earning: '5.00'
    },
    {
      Name: 'Analytics',
      Earning: '5.00'
    },
    {
      Name: 'Social Media Management',
      Earning: '5.00'
    },
    {
      Name: 'Campaign Tracker',
      Earning: '5.00'
    },
    {
      Name: 'Projects',
      Earning: '5.00'
    },
    {
      Name: 'CRM',
      Earning: '5.00'
    },
    {
      Name: 'Client Reporting',
      Earning: '5.00'
    },
    {
      Name: 'Analytics',
      Earning: '5.00'
    },
    {
      Name: 'Social Media Management',
      Earning: '5.00'
    },
    {
      Name: 'Campaign Tracker',
      Earning: '5.00'
    },
    {
      Name: 'Projects',
      Earning: '5.00'
    },
    {
      Name: 'CRM',
      Earning: '5.00'
    }
  ];
  return (
    <div className="flex xl:flex-row max-xl:flex-col h-screen mx-2 xl:space-x-2 max-xl:space-y-4">
      <BusinessDetails />
      <div className="flex flex-row xl:w-[60%] max-sm:flex-col max-xl:w-full h-full border border-gray-300 rounded-[20px]">
        <div className="flex flex-col w-[50%] max-sm:w-full h-full">
          <div className="h-[30%]">
            <div className="text-left p-3 ">
              <h1 className="text-3xl font-bold mb-5">Order Summary</h1>
              <p className="text-[14px] mb-3 font-medium text-gray-600">
                Business Type
              </p>
              <div className="flex flex-row space-x-5 items-center border rounded-[10px] bg-gray-300 border-indigo-500 p-2 w-[100%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-12 bg-indigo-500 p-2 text-white rounded"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                  />
                </svg>

                <p className="text-[18px] font-bold">Marketing Agency</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[100%] px-3 py-2 ">
              <p className="text-[14px]">Selected Features (12)</p>
              <p className="text-[12px]">click to remove</p>
            </div>
          </div>
          <ul className="flex flex-col space-y-2 mb-[10px] h-[70%] overflow-y-auto m-2">
            {feature.map((item, index) => (
              <li
                key={index}
                className="flex flex-row justify-between p-2 hover:text-white hover:bg-indigo-600 rounded-[8px] ms-3 w-[90%] border border-gray-300 bg-gray-100 items-center"
              >
                <div className="flex space-x-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 text-green-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span className="text-[14px] max-sm:text-[12px] max-sm:w-[60%] font-medium truncate">
                    {item.Name}
                  </span>
                </div>
                <div className="flex space-x-3 items-center">
                  <p className="font-medium text-[14px] text-indigo-400 ">
                    ${item.Earning}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <SubscriptionDuration basePrice={60} discount={10} month={12} />
      </div>
    </div>
  );
}

export default OrderSummary;
