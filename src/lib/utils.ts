import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string): string {
  if (!name) return '';
  
  const words = name.trim().split(' ');
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function fixHref(link: string): string {
  // Check if the link starts with "www." but does not already have "http://" or "https://"
  if (/^www\./.test(link) && !/^(https?:\/\/)/.test(link)) {
    return `https://${link}`;
  }
  // Return the link unmodified if it's already absolute
  return link;
}