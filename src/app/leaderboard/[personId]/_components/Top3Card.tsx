import Image from "next/image";

interface Top3CardProps {
  name: string;
  points: number;
  rank: number;
}

function Top3Card({ name, points, rank }: Top3CardProps) {
  return (
    <>
      {/* desktop version */}
      <div className="p-6 rounded-xl shadow-sm bg-white hidden xl:flex flex-col gap-6">
        <div className="flex w-full justify-end">
          <div className="rounded-lg text-primary bg-[#F3EFFD] px-4 py-2 font-medium">
            #{rank}
          </div>
        </div>
        <div className="relative w-44 mx-auto">
          <div className="w-44 h-44 bg-[#f3effd] rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-5xl">
              {name.slice(0, 2)}
            </span>
          </div>
          <Image
            width={50}
            height={50}
            src={`${
              rank === 1
                ? "/img/medals/gold.webp"
                : rank === 2
                ? "/img/medals/silver.webp"
                : "/img/medals/bronze.webp"
            }`}
            alt="Gold Medal"
            className="absolute right-0 bottom-0 w-10 h-auto"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-center">{name}</p>
          <p className="text-lg font-normal text-center text-gray-500">
            {points} Points
          </p>
        </div>
      </div>

      {/* mobile version */}
      <div className="px-4 sm:px-8 py-3 flex xl:hidden gap-4 rounded-lg shadow-sm bg-white">
        <div className="relative w-16">
          <div className="w-16 h-16 bg-[#f3effd] rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-xl">
              {name.slice(0, 2)}
            </span>
          </div>
          <Image
            width={50}
            height={50}
            src={`${
              rank === 1
                ? "/img/medals/gold.webp"
                : rank === 2
                ? "/img/medals/silver.webp"
                : "/img/medals/bronze.webp"
            }`}
            alt="Gold Medal"
            className="absolute right-0 bottom-0 w-5 h-auto"
          />
        </div>
        <div className="flex flex-col justify-center mr-auto">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{points} Points</p>
        </div>
        <div>
          <div className="rounded-lg text-primary bg-[#F3EFFD] px-3 py-1 text-xs md:text-sm font-medium">
            #{rank}
          </div>
        </div>
      </div>
    </>
  );
}

export default Top3Card;
