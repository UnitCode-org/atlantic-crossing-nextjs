"use client";

import React from "react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { HambergerMenu } from "iconsax-react";

function Navbar({ personId }: { personId: number | undefined }) {
  const pathname = usePathname();

  return (
    <Sheet>
      <nav className="py-8 hidden md:flex items-center gap-1 px-20">
        <Button
          asChild
          className={cn(
            "text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24",
            pathname.includes("/meet")
              ? "bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary"
              : "bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80"
          )}
        >
          <Link href={personId ? `/meet/${personId}` : "/meet"}>Meet</Link>
        </Button>
        <Button
          asChild
          className={cn(
            "text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24",
            pathname.includes("/leaderboard")
              ? "bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary"
              : "bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80"
          )}
        >
          <Link href={personId ? `/leaderboard/${personId}` : "/leaderboard"}>
            Leaderboard
          </Link>
        </Button>
        <Button
          asChild
          className={cn(
            "text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24",
            pathname.includes("/matches")
              ? "bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary"
              : "bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80"
          )}
        >
          <Link href={personId ? `/matches/${personId}` : "/matches"}>
            Matches
          </Link>
        </Button>
        <Button
          asChild
          className={cn(
            "text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24",
            pathname.includes("/insta")
              ? "bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary"
              : "bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80"
          )}
        >
          <Link href={personId ? `/insta/${personId}` : "/insta"}>Insta</Link>
        </Button>
        <Button
          asChild
          className={cn(
            "text-[14px] md:text-base font-semibold py-5 min-w-[5rem] md:min-w-24",
            pathname.includes("/profile")
              ? "bg-[#F3EFFD] text-primary hover:bg-[#F3EFFD] hover:text-primary"
              : "bg-transparent text-[#8E8E93] hover:bg-[#F3EFFD] hover:text-primary/80"
          )}
        >
          <Link href={personId ? `/profile/${personId}` : "/profile"}>
            Profile
          </Link>
        </Button>
      </nav>

      <nav className="py-6 md:hidden px-6 flex justify-end w-full">
        <SheetTrigger>
          <HambergerMenu
            size={32}
            color="#6a45ff"
            className="block lg:hidden"
          />
        </SheetTrigger>
      </nav>
      <SheetContent className="z-[60] w-full border-0 bg-white text-black">
        <ul className="mt-12 flex flex-col items-start justify-start gap-y-6 font-poppins text-xl font-semibold">
          <li>
            <SheetClose>
              <Link
                href={`/meet/${personId}`}
                className={pathname.includes("/meet") ? "text-primary" : ""}
              >
                Meet
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <Link
                href={`/leaderboard/${personId}`}
                className={
                  pathname.includes("/leaderboard") ? "text-primary" : ""
                }
              >
                Leaderboard
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <Link
                href={`/matches/${personId}`}
                className={pathname.includes("/matches") ? "text-primary" : ""}
              >
                Matches
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <Link
                href={`/insta/${personId}`}
                className={pathname.includes("/insta") ? "text-primary" : ""}
              >
                Insta
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <Link
                href={`/profile/${personId}`}
                className={pathname.includes("/profile") ? "text-primary" : ""}
              >
                Profile
              </Link>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Navbar;
