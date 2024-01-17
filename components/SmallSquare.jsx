const SmallSquare = ({ numberOfSquare }) => {
  return (
    <>
      <div className="border border-white/30 w-20 h-20 transition duration-300 ease-in-out hover:border-white cursor-pointer text-white">
        {numberOfSquare}
      </div>
    </>
  );
};
export default SmallSquare;
