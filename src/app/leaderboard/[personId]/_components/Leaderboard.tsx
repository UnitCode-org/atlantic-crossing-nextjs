"use client";

import Navbar from "@/components/ui/Navbar";
import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import Link from "next/link";
import Top3Card from "./Top3Card";
import usePagination from "@/hooks/usePagination";
import { Person } from "@/types/person";
import Pagination from "@/components/ui/pagination";
import { getInitials } from '@/lib/utils';

type LeaderboardProps = {
  persons: Person[];
  currentPerson: Person;
};

function Leaderboard({ persons, currentPerson }: LeaderboardProps) {
  const [top3, setTop3] = useState<Person[]>([]);
  const [rest, setRest] = useState<Person[]>([]);

  useEffect(() => {
    const sortedPersons = persons.sort((a, b) => b.points - a.points);
    const topThree = sortedPersons.slice(0, 3);
    setTop3(topThree);
    setRest(sortedPersons.slice(3));
  }, [persons]);

  const {
    paginatedData,
    options,
    currentPage,
    pageCount,
    itemsPerPage,
    handleItemsPerPageChange,
    handlePageClick,
  } = usePagination(rest);

  return (
    <div className="flex flex-col justify-between items-center h-screen overflow-x-hidden">
      <div className="flex justify-center items-center text-center flex-col xl:hidden pt-8 px-16">
        <h2 className="text-[28px] font-semibold w-fit">Atlantic Crossing</h2>
        <p className="text-[16px] font-semibold w-fit pt-1">
          Welcome, <span className="text-primary">{currentPerson?.name}</span>
        </p>
        <Link className="text-xs font-normal text-primary" href={`/`}>
          (that&apos;s not me)
        </Link>
      </div>
      <Navbar personId={currentPerson?.id} />
      <div className="overflow-y-auto flex items-center justify-center w-full h-full">
        <div className="flex-grow w-20 p-12 hidden xl:flex flex-col items-center -mt-[128px]">
          <div className="w-fit">
            <h2 className="text-[32px] font-semibold w-fit">
              Atlantic Crossing
            </h2>
            <p className="text-[20px] font-semibold w-fit">
              Welcome,{" "}
              <span className="text-primary">{currentPerson?.name}</span>
            </p>
            <Link className="text-sm font-normal text-primary" href={`/`}>
              (that&apos;s not me)
            </Link>
          </div>
        </div>

        <div className="w-[48rem] mx-6 xl:mx-0 overflow-y-auto h-full hide-scrollbar">
          <Alert />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-4 pt-0 xl:pt-8 pb-8">
            {top3.map((person, index) => (
              <Top3Card
                key={person.id}
                name={person.name}
                points={person.points}
                rank={index + 1}
              />
            ))}
          </div>
          <div className="bg-white rounded-xl mb-12">
            <div className="table-container">
              <div className="table-header">
                <div style={{ minWidth: "1.8rem" }}>#</div>
                <div className="mr-auto">Username</div>
                <div className="text-end" style={{ minWidth: "5rem" }}>
                  Points
                </div>
              </div>

              {paginatedData &&
                paginatedData.map((person, index) => (
                  <div
                    className={`flex items-center gap-2 ${
                      index % 2 === 0 ? "bg-[#f6f7fe]" : "bg-white"
                    }`}
                    key={index}
                  >
                    <div style={{ minWidth: "1.8rem" }}>
                      <span>{index + 4 + currentPage * itemsPerPage}</span>
                    </div>
                    <div className="mr-auto flex items-center">
                      <div className="inline-block min-w-[32px] min-h-[32px] w-[32px] h-[32px] rounded-full text-center leading-[32px] text-[13px] font-bold text-white mr-[6px] md:min-w-[42px] md:min-h-[42px] md:w-[42px] md:h-[42px] md:leading-[42px] md:text-[15px] md:mr-[10px] bg-primary">
                        {getInitials(person.name)}
                      </div>
                      <span className="follow-username-width text-unit-gray-30 font-medium">
                        {person.name}
                      </span>
                    </div>
                    <div className="text-end" style={{ minWidth: "5rem" }}>
                      {person.points}
                    </div>
                  </div>
                ))}

              {itemsPerPage % 2 === 0 && <hr className="table-bottom-line" />}
            </div>

            {pageCount > 0 && (
              <Pagination
                itemsPerPage={itemsPerPage}
                pageCount={pageCount}
                currentPage={currentPage}
                options={options}
                dataCount={rest.length}
                handleItemsPerPageChange={handleItemsPerPageChange}
                handlePageClick={handlePageClick}
              />
            )}
          </div>
        </div>
        <div className="flex-grow w-20 hidden xl:block"></div>
      </div>
    </div>
  );
}

export default Leaderboard;
