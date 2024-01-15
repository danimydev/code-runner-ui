import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserAgentName() {
  const { userAgent } = navigator;
  const [userAgentName] = userAgent.split(" ");
  return userAgentName;
}
