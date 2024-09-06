"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

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

  return (
    <div className="max-w-2xl mx-auto p-8 mb-32">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="w-full">
          <label
            className="block text-gray-700 font-medium mb-2"
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
            className="w-full px-5 py-5 border rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Full name"
            required
          />
        </div>
        <div className="w-full">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="organization"
          >
            What&apos;s your church/organisation name?
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-5 py-5 border rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Name of your church/org."
            required
          />
        </div>
        <div className="w-full">
          <label
            className="block text-gray-700 font-medium mb-2"
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
            className="w-full px-5 py-5 border rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="w-full">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="contact"
          >
            What&apos;s your contact number?
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-5 py-5 border rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Contact no."
            required
          />
        </div>
        <div className="w-full">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="help"
          >
            How can we help you?
          </label>
          <textarea
            id="help"
            name="help"
            value={formData.help}
            onChange={handleChange}
            className="w-full px-5 py-5 border rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Tell us briefly you problem..."
            required
          />
        </div>
        <div className="w-full">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="budget"
          >
            Do you have a defined budget?
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-5 py-5 border rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Enter your budget"
            required
          />
        </div>
        <div className="w-full mx-auto">
          <button
            type="submit"
            className={`w-fit bg-blue-500 text-white px-8 py-5 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
              isSubmitting ? "loading" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
