'use client';

import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Person } from '@prisma/client';
import { ArrowRightLeft, Check, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function WelcomeCard({ persons }: { persons: Person[] }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(persons[0].id.toString());

  return (
    <Card className='text-center w-[28rem]'>
      <h1 className='text-primary text-2xl font-semibold pt-4 pb-16'>Atlantic Crossing</h1>
      <div className='flex flex-col gap-4'>
        <h3 className='font-semibold text-[32px] pb-2'>What is your name?</h3>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='justify-between border-none bg-[#F6F7FE] py-7 px-5'
            >
              {value ? persons.find((person) => person.id === parseInt(value))?.name : 'Select name...'}
              <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[320px] p-0' align='start'>
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
                    >
                      {person.name}
                      <Check className={cn('ml-auto', value === person.id.toString() ? 'opacity-100' : 'opacity-0')} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Button className='py-6 font-semibold' onClick={() => router.push(`/meet/${value}`)}>
          Get Started
        </Button>
        <p className='flex items-center gap-3 text-base justify-center pb-16'>
          <ArrowRightLeft size={18} className='text-primary' />
          288 Meets and Interactions
        </p>
      </div>
    </Card>
  );
}

export default WelcomeCard;
