type SubProps = {
  discount: number;
  basePrice: number;
  month: number;
};

const SubscriptionDuration = (props: SubProps) => {
  const monthlyPrice: number = props.basePrice - props.discount;
  const totalPrice: number = monthlyPrice * props.month;
  const totalDiscountAmount: number =
    props.basePrice * props.month - monthlyPrice * props.month;
  return (
    <div
      className="flex flex-col sm:mt-20 w-[50%] max-sm:w-full p-3
    "
    >
      <h1 className="font-semibold text-gray-600">Subscription Duration</h1>
      <div className="border border-gray-300 rounded-[5px] p-3 mt-2 mb-3 bg-gray-100">
        <p className="text-[16px] font-bold ">{props.month} month</p>
        <p className="text-[13px] font-semibold text-green-600">
          ${props.discount} discount applied
        </p>
      </div>
      <div className="border border-gray-300 rounded-[5px] p-3 mt-2 bg-gray-100">
        <p className="text-gray-400 font-medium text-[14px]">
          Pricing Breakdown
        </p>
        <div className="flex flex-row justify-between items-center mt-[20px]">
          <p>Base Price/month :</p>
          <p className="font-semibold text-[16px]">${props.basePrice}</p>
        </div>
        <div className="flex flex-row justify-between items-center mt-[15px] border-b pb-4">
          <p>Discount(10%) :</p>
          <p className="font-semibold text-[16px] text-green-600">
            -$
            {props.discount}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center pt-5">
          <p>Monthly Price :</p>
          <p className="bold text-[16px] ">-${monthlyPrice}</p>
        </div>
        <div className="flex flex-row justify-between items-center mt-[15px] border-b pb-4">
          <p>Duration:</p>
          <p className="text-[16px]">{props.month} months</p>
        </div>
        <div className="flex flex-row justify-between items-center  text-xl font-bold mt-[20px]">
          <p>Total Price :</p>
          <p className="text-3xl text-blue-600">${totalPrice}</p>
        </div>
        <p className="text-green-600 text-[13px] font medium flex justify-end items-center mt-[8px]">
          Your Save ${totalDiscountAmount} with this
        </p>
      </div>
    </div>
  );
};

export default SubscriptionDuration;
