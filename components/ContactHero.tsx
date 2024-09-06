import React from "react";

const ContactHero = () => {
  return (
    <section className="container pb-20 pt-20">
      <div className="max-w-2xl mx-auto relative z-10 w-full flex flex-col gap-5 items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Let&apos;s Bring Your Vision
          <br />
          To Life
        </h1>
        <p className="text-xl md:text-2xl text-center">
          Contact us to discuss business opportunities, or just to say hello.
          Use the form below or send us an email at{" "}
          <a
            className="nav-link-hover relative"
            href="mailto:info@vimerge.studio"
          >
            info@vimerge.studio.
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
