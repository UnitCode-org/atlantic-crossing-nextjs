'use client';

import Card from '@/components/ui/card';
import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { getInitials } from '@/lib/utils';
import { Person } from '@/types/person';
import { useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';

type InstaProps = {
  persons: Person[];
  currentPerson: Person;
};

function Insta({ persons, currentPerson }: InstaProps) {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='flex flex-col justify-between items-center h-screen overflow-x-hidden xl:overflow-y-hidden'>
      <div className='flex justify-end w-full md:hidden'>
        <Navbar personId={currentPerson.id} />
      </div>

      <div className='flex justify-center items-center text-center flex-col xl:hidden pt-0 md:pt-8 pb-8 md:pb-0 px-16'>
        <h2 className='text-[28px] font-semibold w-fit'>Atlantic Crossing</h2>
        <p className='text-[16px] font-semibold w-fit pt-1'>
          Welcome, <span className='text-primary'>{currentPerson.name}</span>
        </p>
        <Link className='text-xs font-semibold text-primary underline' href={`/`}>
          That&apos;s not me
        </Link>
      </div>

      <div className='hidden md:block'>
        <Navbar personId={currentPerson.id} />
      </div>

      <div className='flex items-center justify-center w-full h-full pb-12 xl:pb-40 px-6 xl:px-0'>
        <div className='flex-grow w-20 p-12 pb-12 xl:pb-[7.5rem] hidden xl:flex flex-col items-center'>
          <div className='w-fit'>
            <h2 className='text-[32px] font-semibold w-fit'>Atlantic Crossing</h2>
            <p className='text-[20px] font-semibold w-fit'>
              Welcome, <span className='text-primary'>{currentPerson.name}</span>
            </p>
            <Link className='text-sm font-semibold text-primary underline' href={`/`}>
              That&apos;s not me
            </Link>
          </div>
        </div>
        <Card className='w-full md:w-[48rem] h-full p-6 pb-0 md:p-8 md:pb-0 flex flex-col overflow-x-hidden'>
          <div className='flex items-center md:gap-x-1 mx-auto'>
            <Image
              src='/img/instagram/instagram-logo.svg'
              alt='insta'
              width={75}
              height={75}
              className='size-16 md:size-28'
            />
            <p className='text-2xl md:text-4xl font-semibold'>Instagram</p>
          </div>

          <div className='relative my-4'>
            <input
              type='text'
              value={search}
              onChange={handleChange}
              placeholder='Search...'
              className='w-full p-4 pl-5 pr-12 bg-[#F6F7FE] rounded-lg focus:outline-none text-[#292D32]'
            />
            <div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
              <SearchNormal1 size='24' color='#292D32' />
            </div>
          </div>

          <div className='overflow-y-auto overflow-x-hidden'>
            {filteredPersons.map((person, index) => (
              <div className='flex items-center gap-2 py-3' key={person.id}>
                <div className='md:text-lg' style={{ minWidth: '1.8rem' }}>
                  {index + 1}
                </div>
                <div className='mr-auto flex items-center gap-1 font-medium'>
                  <div className='inline-block min-w-[40px] min-h-[40px] w-[40px] h-[40px] rounded-full text-center leading-[40px] text-[13px] font-bold text-primary mr-[6px] md:min-w-[60px] md:min-h-[60px] md:w-[60px] md:h-[60px] md:leading-[60px] md:text-[18px] md:mr-[10px] bg-[#F3EFFD]'>
                    {getInitials(person.name)}
                  </div>
                  <span className='text-sm md:text-base follow-username-width text-unit-gray-30 font-medium'>
                    {person.name}
                    {person.instagramLink ? (
                      <Link
                        href={person.instagramLink}
                        target='_blank'
                        className='text-primary underline font-medium block md:hidden truncate'
                        style={{ minWidth: '5rem' }}
                      >
                        {person.instagramLink.includes('instagram.com')
                          ? '@' + person.instagramLink.replace('https://www.instagram.com/', '').split('/')[0]
                          : person.instagramLink}
                      </Link>
                    ) : (
                      <p className='block md:hidden'>-</p>
                    )}
                  </span>
                </div>
                {person.instagramLink ? (
                  <Link
                    href={person.instagramLink}
                    target='_blank'
                    className='text-end text-primary underline font-medium hidden md:block'
                    style={{ minWidth: '5rem' }}
                  >
                    {person.instagramLink.includes('instagram.com')
                      ? '@' + person.instagramLink.replace('https://www.instagram.com/', '').split('/')[0]
                      : person.instagramLink}
                  </Link>
                ) : (
                  <p className='text-end hidden md:block'>-</p>
                )}
              </div>
            ))}
          </div>
        </Card>
        <div className='flex-grow w-20 hidden xl:block'></div>
      </div>
      <div className='flex-grow w-full'></div>
    </div>
  );
}

export default Insta;
