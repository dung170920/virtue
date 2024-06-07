import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function caculateProgress(total: number, raised: number) {
  return Math.round((raised / total) * 100);
}
