import SmallSquare from "./SmallSquare";

const BigSquare = ({ numberOfSquares }) => {
  return (
    <>
      <div className="grid grid-cols-2 place-content-center gap-[4px]">
        {Array.from({ length: 4 }, (_, index) => (
          <SmallSquare key={index} numberOfSquare={numberOfSquares * 2} />
        ))}
      </div>
    </>
  );
};
export default BigSquare;
 