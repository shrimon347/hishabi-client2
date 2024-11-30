import Hero from "@/components/home/hero";
import Navbar from "@/components/shared/Navbar";

const Home = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2]  lg:h-screen md:h-[740px] h-[668px] w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[510px] w-full rounded-full bg-green-700 opacity-40 blur-[100px]"></div>
      </div>
      <Navbar />
      <Hero />
     
    </div>
  );
};

export default Home;
