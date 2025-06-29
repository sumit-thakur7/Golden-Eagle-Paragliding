import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  // Adding T00:00:00 to handle potential timezone issues where parsing just the date string
  // might result in the previous day depending on the server's timezone.
  const date = new Date(`${dateString}T00:00:00`);
  return format(date, "MMMM d, yyyy");
}
