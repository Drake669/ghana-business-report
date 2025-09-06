import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Built Logo"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#registration"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Registration
          </a>
          <a
            href="#tax-and-compliance"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Tax & Compliance
          </a>
          <a
            href="#funding"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Funding
          </a>
          <a
            href="#hiring"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Hiring
          </a>
        </nav>

        <Link href={"https://built.africa"} target="_blank">
          <Button className="text-white px-8 py-6 rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
}
