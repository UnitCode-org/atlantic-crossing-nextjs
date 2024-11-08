import { InfoCircle } from "iconsax-react";
import Link from "next/link";

function Alert() {
  return (
    <div className="w-full p-4 rounded-xl hidden xl:flex items-center gap-2 bg-[#F3EFFD]">
      <InfoCircle
        size="44"
        color="#6a45ff"
        variant="Bold"
        className="min-w-10"
      />
      <p className="text-primary leading-tight">
        <span className="font-semibold">$1000 in UNIT</span> prize for the top
        10 on the leaderboard. Here is a{" "}
        <Link href="" className="font-semibold underline">
          Unit Network
        </Link>{" "}
        invitation. Can send $10 UNIT to all.
      </p>
    </div>
  );
}

export default Alert;
