const SubmitBtn = ({ isLoading, value }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full sm:w-[166px] bg-btn-red  transition-all duration-300 hover:bg-hover-btn-red hover:scale-105 rounded-[200px] text-background px-[60px] py-4 p-3 cursor-pointer"
    >
      {value}
    </button>
  );
};
export default SubmitBtn;
{
  /* <button
  type="submit"
  className="w-full bg-btn-red inline-block text-gray-100 px-[48px] py-[16px] rounded-[200px] transition-all decoration-300 transform hover:border-hover-btn-red hover:scale-105 "
>
  {value}
</button>; */
}
