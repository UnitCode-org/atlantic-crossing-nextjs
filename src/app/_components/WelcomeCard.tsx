'use client';

import Card from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Person } from '@prisma/client';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

function WelcomeCard({ persons }: { persons: Person[] }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    
  return (
    <Card>
      <h1>Atlantic Crossing</h1>
      <div className='flex flex-col gap-4'>
        <h3>What is your name?</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline' role='combobox' aria-expanded={open} className='w-[200px] justify-between'>
              {value ? persons.find((person) => person.name === value)?.name : 'Select name...'}
              <ChevronsUpDown className='opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[200px] p-0'>
            <Command>
              <CommandInput placeholder='Search framework...' />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {persons.map((person) => (
                    <CommandItem
                      key={person.id}
                      value={person.name}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue);
                        setOpen(false);
                      }}
                    >
                      {person.name}
                      <Check className={cn('ml-auto', value === person.name ? 'opacity-100' : 'opacity-0')} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Button>Continue</Button>
      </div>
    </Card>
  );
}

export default WelcomeCard;
