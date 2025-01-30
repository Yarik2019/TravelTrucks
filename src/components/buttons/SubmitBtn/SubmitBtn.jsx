const SubmitBtn = ({ value }) => {
  return (
    <button
      type="submit"
      className=" w-full bg-btn-red inline-block text-gray-100 px-[48px] py-[16px] rounded-[200px] transition-transform transform hover:scale-105 sm:w-[166px]"
    >
      {value}
    </button>
  );
};
export default SubmitBtn;
