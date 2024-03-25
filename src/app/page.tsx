import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ConversionForm from "@/app/conversion/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto wallet",
  description: "Exchange wallet crypto",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />

      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />

      <Contact />
    </>
  );
}
