import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import React, { useState } from "react";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in required fields!");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* Contact Info Section */}
      <div className="flex flex-col sm:flex-row justify-start items-center bg-black text-white p-6 sm:p-12 gap-6 sm:gap-12">
        <div className="text-center sm:text-left">
          <h1 className="text-gray-600 font-bold text-xl sm:text-2xl">
            CONTACT INFORMATION
          </h1>
          <p className="text-sm sm:text-base mt-2">
            Feel free to reach out to us through various channels.
            <br /> We are available by phone, email, and social media for your
            convenience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-sm sm:text-base">
          <a
            href="tel:+919640366123"
            className="flex items-center gap-2 underline underline-offset-4 decoration-gray-700"
          >
            +91 9640366123 <MoveUpRight size={18} />
          </a>
          <a
            href="mailto:chandu9kilaparthi@gmail.com"
            className="flex items-center gap-2 underline underline-offset-4 decoration-gray-700"
          >
            chandu9kilaparthi@gmail.com <MoveUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start bg-black text-white p-6 sm:p-12 gap-6 sm:gap-12">
        <div className="w-full sm:w-1/2 text-left">
          <h2 className="text-gray-600 font-bold text-2xl sm:text-3xl">
            SEND ME A MESSAGE
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            Have a specific inquiry or message for us?
            <br /> Please use the contact form below, and we'll get back to you
            promptly.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative border-b border-gray-600">
                <label htmlFor="firstName" className="text-white text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="FIRST NAME"
                  className="w-full bg-transparent text-white p-2 outline-none h-16 focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="relative border-b border-gray-600">
                <label htmlFor="lastName" className="text-white text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="LAST NAME"
                  className="w-full bg-transparent text-white p-2 outline-none h-16 focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative border-b border-gray-600">
                <label htmlFor="email" className="text-white text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent text-white p-2 outline-none h-16 focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="relative border-b border-gray-600">
                <label htmlFor="phone" className="text-white text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="PHONE NUMBER"
                  className="w-full bg-transparent text-white p-2 outline-none h-16 focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative border-b border-gray-600">
              <label htmlFor="message" className="text-white text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                className="w-full bg-transparent text-white p-2 outline-none h-20 focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center sm:justify-start mt-6">
              <Button
                type="submit"
                className="bg-[#4A2CED] rounded-full text-center px-10 py-5 shadow-lg flex items-center gap-2 text-white uppercase text-lg"
                aria-label="Send Message"
              >
                Send Message <MoveUpRight size={24} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
