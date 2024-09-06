import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import React from "react";

const page = () => {
  return (
    <main className="container">
      <ContactHero />
      <ContactForm />
    </main>
  );
};

export default page;
