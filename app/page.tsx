import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-screen flex flex-col justify-center items-center bg-indigo-600">
        <div className="relative w-auto h-fit flex flex-col justify-center items-center">
          <div className="absolute w-[460px] h-[460px] bg-gradient-to-r from-indigo-200 to-indigo-400 rounded-full opacity-20"></div>
          <div className="absolute w-[390px] h-[390px] bg-indigo-100 rounded-full opacity-30"></div>
          <div className="absolute w-[320px] h-[320px] bg-indigo-50 rounded-full opacity-40"></div>

          <div className="relative z-10">
            <Image
              src={"/3d-cinema-film-projector.png"}
              alt={"vintage-camera"}
              width={300}
              height={300}
              className="z-10"
            />
          </div>
        </div>

        <h1 className="my-10 font-extrabold text-white">
          <span className="flex flex-col text-8xl ">Film</span>
          <span className="flex flex-col text-6xl">Spelet</span>
        </h1>

        <Button className="">Starta</Button>
      </div>
    </>
  );
}
