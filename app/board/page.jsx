import BigSquare from "@/components/BigSquare";

const Board = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen space-x-20">
        <div>
          <p className="text-white text-6xl">0</p>
        </div>
        <div className="grid grid-cols-8 auto-cols-auto gap-5 justify-items-center">
          {Array.from({ length: 32 }, (_, index) => (
            <BigSquare key={index} numberOfSquares={index} />
          ))}
        </div>
        <div>
          <p className="text-white text-6xl">0</p>
        </div>
      </div>
    </>
  );
};
export default Board;
