"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, MapPin, Github, FileDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Header() {
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Paulo_Neves_CV.pdf";
    link.download = "Paulo_Neves_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="border-b border-border/40 bg-background">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/perfil-quadrada.webp"
                alt="Paulo Neves"
                fill
                priority
                sizes="(min-width: 1024px) 96px, 80px"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23e5e7eb'/></svg>"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <div className="space-y-0">
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">Paulo Neves</h1>
              <p className="text-lg lg:text-xl text-primary font-medium leading-tight -mt-2">Johnson &amp; Johnson</p>
              <p className="text-base lg:text-lg text-muted-foreground font-medium leading-tight -mt-1">Full Stack Engineering Manager | People Leader</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin size={16} className="text-primary" />
                <span>Jacareí-SP, Brazil</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={16} className="text-primary" />
                <span>paulo@psneves.com.br</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            <ThemeToggle />
            <TooltipProvider delayDuration={100}>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={handleDownloadPDF} className="button-primary text-sm px-4 py-2 lg:px-6 lg:py-3" aria-label="Save PDF">
                      <FileDown size={16} />
                      <span className="hidden sm:inline">Save PDF</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Save PDF</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://br.linkedin.com/in/psneves" target="_blank" className="button-secondary text-sm px-4 py-2 lg:px-6 lg:py-3" aria-label="LinkedIn">
                      <Linkedin size={16} />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">LinkedIn</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://github.com/psneves" target="_blank" className="button-secondary text-sm px-4 py-2 lg:px-6 lg:py-3" aria-label="GitHub">
                      <Github size={16} />
                      <span className="hidden sm:inline">GitHub</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">GitHub</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </header>
  );
}
