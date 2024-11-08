'use client';

import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { ArrowDown2, TickCircle } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Person } from '@/types/person';

function ProfileCard({ persons, currentPersonId }: { persons: Person[]; currentPersonId: number }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Card className='w-[48rem] overflow-y-auto h-full mx-6 p-6 md:p-8 flex flex-col justify-center items-center'>
      <h1 className='text-[20px] md:text-[32px] font-semibold pb-5 md:pb-6'>Which Profile?</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='justify-between border-none text-sm md:text-base font-normal bg-[#F6F7FE] py-7 px-5 w-full'
          >
            {value ? persons.find((person) => person.id === parseInt(value))?.name : 'Select name...'}
            <ArrowDown2 color='#2C2C2E' size={24} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[260px] md:w-[480px] p-0 sm:' align='start' side='bottom'>
          <Command>
            <CommandInput placeholder='Search name...' />
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {persons.map((person) => (
                  <CommandItem
                    key={person.id}
                    value={person.id.toString()}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                    }}
                    keywords={[person.name]}
                  >
                    {person.name}
                    <TickCircle
                      className={cn('ml-auto', value === person.id.toString() ? 'opacity-100' : 'opacity-0')}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Button
        className='py-6 text-sm md:text-base font-semibold rounded-lg my-2 w-full mt-6'
        onClick={() => router.push(`/profile/${currentPersonId}/${value}`)}
      >
        Search
      </Button>
    </Card>
  );
}

export default ProfileCard;