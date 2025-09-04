import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(contact: string): string {
  const randomString = Math.random().toString(36).substring(2, 11);
  let base = contact.trim().toLowerCase();

  // this checks for an email
  if (base.includes("@")) {
    base = base.split("@")[0];
  } else {
    // For phone
    base = base.replace(/\D/g, "");
  }

  base = base.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  return `${base}-${randomString}`;
}

export function smoothScrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
