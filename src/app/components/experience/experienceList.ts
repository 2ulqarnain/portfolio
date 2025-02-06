import w4workLogo from "@/../public/assets/logos/w4work-logo.png";
import stLightLogo from "@/../public/assets/logos/st-light.webp";
import { StaticImageData } from "next/image";

export enum CompanyType {
  FinTech = "FinTech",
  Telemarketing = "Telemarketing",
  DefTech = "DefTech",
}

export interface Experience {
  companyLogo: StaticImageData;
  companyName: string;
  companyType: CompanyType;
  role: string;
  duration: string;
}

export const experienceList = [
  {
    companyLogo: w4workLogo,
    companyName: "w4work inc.",
    companyType: CompanyType.Telemarketing,
    role: "Frontend Developer",
    duration: "August 2022 - November 2022",
    bgColorClass: "bg-zinc-800",
    textColorClass: "text-zinc-200",
    imageClassName: "mix-blend-exclusion",
  },
  {
    companyLogo: stLightLogo,
    companyName: "Stocks Telegraph",
    companyType: CompanyType.FinTech,
    role: "Frontend Developer",
    duration: "November 2022 - August 2024",
    bgColorClass: "bg-zinc-200",
    textColorClass: "text-zinc-800",
    imageClassName: "w-40",
  },
];
