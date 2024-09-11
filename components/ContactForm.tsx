"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import CheckBox from "./ui/CheckBox";
import Button from "./ui/Button";

interface FormData {
  name: string;
  organization: string;
  email: string;
  contact: string;
  help: string;
  budget: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    contact: "",
    help: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleCheck = (checked: boolean) => {
    console.log("Checkbox state:", checked);
  };

  return (
    <section className="pt-32 md:mt-32 mx-auto px-2">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="w-full">
              <label className="block text-gray-700 font-medium font-neuehaaslight mb-4 text-xl">
                What are you looking to do?
              </label>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <CheckBox
                  name="service"
                  value="Branding"
                  title="Brand/Visual Identity"
                  onCheck={handleCheck}
                />
                <CheckBox
                  name="service"
                  value="Web development"
                  title="A website"
                  onCheck={handleCheck}
                />
                <CheckBox
                  name="service"
                  value="Marketing"
                  title="Marketing/PR"
                  onCheck={handleCheck}
                />
                <CheckBox
                  name="service"
                  value="App development"
                  title="Mobile app development"
                  onCheck={handleCheck}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 text-xl"
                htmlFor="name"
              >
                What&apos;s your name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="Gold Nelson"
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 text-xl"
                htmlFor="organization"
              >
                What&apos;s your company/organisation name?
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="South Circle Co."
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 text-xl"
                htmlFor="email"
              >
                What&apos;s your email?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="nelson@southcircle.co"
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 text-xl"
                htmlFor="contact"
              >
                How did you find us?
              </label>
              <input
                type="text"
                id="find"
                name="find"
                value={formData.contact}
                onChange={handleChange}
                className="w-full placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="LinkedIn, Google, Instagram,..."
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-medium font-neuehaaslight mb-4 text-xl">
              What&apos;s your estimated project budget? *
              </label>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <CheckBox
                  name="budget"
                  value="< $50k"
                  title="< $50k"
                  onCheck={handleCheck}
                />
                <CheckBox
                  name="budget"
                  value="$50k - $100k"
                  title="$50k - $100k"
                  onCheck={handleCheck}
                />
                <CheckBox
                  name="budget"
                  value="$100k - $250k"
                  title="$100k - $250k"
                  onCheck={handleCheck}
                />
                <CheckBox
                  name="budget"
                  value="Greater than $250k"
                  title="> $250k"
                  onCheck={handleCheck}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 text-xl"
                htmlFor="help"
              >
                Describe your project
              </label>
              <textarea
                id="help"
                name="help"
                value={formData.help}
                onChange={handleChange}
                className="w-full placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600 no-scrollbar"
                placeholder="Tell us how we can help. It could be the project summary or brief."
                required
              />
            </div>
            <div className="w-full mx-auto mt-8">
              <Button
              text="Send the message"
              className="px-8 py-8 text-lg font-medium rounded-full whitespace-nowrap font-neuehaaslight"
              variant="outline"
            />
            </div>
          </form>
          <div className="p-4">
            <Image
              src="/assets/phone.svg"
              alt="phone"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
