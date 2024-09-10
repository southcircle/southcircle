import CallUsNow from "@/components/CallUsNow";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import FAQ from "@/components/FAQ";
import React from "react";

const page = () => {
  return (
    <main className="pt-10 mt-10 container mx-auto px-4 max-w-8xl">
      <ContactHero />
      <ContactForm />
      <CallUsNow />
      <FAQ />
    </main>
  );
};

export default page;
