import Logo from "@/components/Logo";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Logo className="fill-white/30 transition duration-300 ease-in-out hover:fill-white cursor-pointer" />
      </div>
    </>
  );
};
export default Home;
