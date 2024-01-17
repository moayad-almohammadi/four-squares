const Game = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex">
          <input
            type="text"
            className="outline-none border border-white/30 text-4xl text-white p-3 transition duration-300 ease-in-out focus:border-white placeholder:text-white/20"
            placeholder="Game code"
          />
          <i className="ri-arrow-right-s-fill text-white/30 text-6xl transition duration-300 ease-in-out hover:text-white self-center cursor-pointer"></i>
        </div>
      </div>
    </>
  );
};
export default Game;
