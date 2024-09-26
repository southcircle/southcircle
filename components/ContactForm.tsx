"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import CheckBox from "./ui/CheckBox";
import Button from "./ui/Button";
import AlertComponent from "./ui/Alert";

interface FormData {
  name: string;
  organization: string;
  email: string;
  contact: string;
  help: string;
  budget: string;
}

interface AlertState {
  message: string;
  type: "success" | "error"; // Only 'success' or 'error' are allowed
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
  const [alert, setAlert] = useState<AlertState | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert({
      message: 'Sending your request...',
      type: 'success',
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Show success alert
        setAlert({ message: result.message, type: "success" });
        setIsSubmitting(false);
      } else {
        // Show error alert
        setAlert({ message: result.message, type: "error" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({
        message: "An error occurred. Please try again.",
        type: "error",
      });
    }
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
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <CheckBox
                  name="service"
                  value="Branding"
                  title="Brand Identity"
                  onChange={handleChange}
                />
                <CheckBox
                  name="service"
                  value="Development"
                  title="A Website"
                  onChange={handleChange}
                />
                <CheckBox
                  name="service"
                  value="Marketing"
                  title="Marketing/PR"
                  onChange={handleChange}
                />
                <CheckBox
                  name="service"
                  value="App Development"
                  title="App Development"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-2 md:mb-4 text-base md:text-xl"
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
                className="w-full placeholder:text-lg md:placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 md:text-xl"
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
                className="w-full placeholder:text-lg md:placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="Your Company"
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 md:text-xl"
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
                className="w-full placeholder:text-lg md:placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 md:text-xl"
                htmlFor="contact"
              >
                How did you find us?
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full placeholder:text-lg md:placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="LinkedIn, Google, Instagram,..."
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-medium font-neuehaaslight mb-4 md:text-xl">
                What&apos;s your estimated project budget? *
              </label>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <CheckBox
                  name="budget"
                  value="< $50k"
                  title="< $50k"
                  onChange={handleChange}
                />
                <CheckBox
                  name="budget"
                  value="$50k - $100k"
                  title="$50k - $100k"
                  onChange={handleChange}
                />
                <CheckBox
                  name="budget"
                  value="$100k - $250k"
                  title="$100k - $250k"
                  onChange={handleChange}
                />
                <CheckBox
                  name="budget"
                  value="Greater than $250k"
                  title="> $250k"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-medium font-neuehaaslight mb-4 md:text-xl"
                htmlFor="help"
              >
                Describe your project
              </label>
              <textarea
                id="help"
                name="help"
                value={formData.help}
                onChange={handleChange}
                className="no-scrollbar w-full placeholder:text-lg md:placeholder:text-2xl font-neuehaasroman placeholder:text-gray-400 py-10 border-b-2 border-gray-200 focus:outline-none focus:border-gray-600"
                placeholder="Tell us how we can help. It could be the project summary or brief."
                required
              />
            </div>
            <div className="w-full mx-auto mt-8">
              <Button
                text={isSubmitting ? "Sending..." : "Send the message"}
                className="px-12 py-8 text-sm md:text-lg font-medium rounded-full whitespace-nowrap font-neuehaaslight w-44 md:w-52"
                variant="outline"
                disabled={isSubmitting}
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
        {alert && (
          <AlertComponent
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert(null)} // Clear alert when closed
          />
        )}
      </div>
    </section>
  );
};

export default ContactForm;
