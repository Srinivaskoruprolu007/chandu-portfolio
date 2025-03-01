import { MoveUpRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Subcontainer from "../components/Subcontainer";
import toast, { Toaster } from "react-hot-toast";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in required fields!", {
        duration: 3000,
        position: "bottom-right",
      });
      return;
    }

    const loadingToast = toast.loading("Sending message...", {
      position: "bottom-right",
    });

    try {
      const response = await fetch("https://formspree.io/f/mzzdnbvd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          id: loadingToast,
          duration: 3000,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.", {
          id: loadingToast,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        id: loadingToast,
        duration: 3000,
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  return (
    <div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      <Subcontainer />
      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-start items-center bg-black dark:bg-white text-white dark:text-black p-6 sm:p-12 gap-6 sm:gap-12"
      >
        <div className="text-center sm:text-left">
          <h1 className="text-gray-600 dark:text-gray-500 font-bold text-xl sm:text-2xl">
            CONTACT INFORMATION
          </h1>
          <p className="text-sm sm:text-base mt-2 text-gray-300 dark:text-gray-700">
            Feel free to reach out to us through various channels.
            <br /> We are available by phone, email, and social media for your
            convenience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-sm sm:text-base">
          <a
            href="tel:+919640366123"
            className="flex items-center gap-2 underline underline-offset-4 decoration-gray-700 dark:decoration-gray-400 hover:text-gray-300 dark:hover:text-gray-600 transition-colors"
          >
            +91 9640366123 <MoveUpRight size={18} />
          </a>
          <a
            href="mailto:chandu9kilaparthi@gmail.com"
            className="flex items-center gap-2 underline underline-offset-4 decoration-gray-700 dark:decoration-gray-400 hover:text-gray-300 dark:hover:text-gray-600 transition-colors"
          >
            chandu9kilaparthi@gmail.com <MoveUpRight size={18} />
          </a>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row justify-between items-start bg-black dark:bg-white text-white dark:text-black p-6 sm:p-12 gap-6 sm:gap-12"
      >
        <div className="w-full sm:w-1/2 text-left">
          <h2 className="text-gray-600 dark:text-gray-500 font-bold text-2xl sm:text-3xl">
            SEND ME A MESSAGE
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300 dark:text-gray-700">
            Have a specific inquiry or message for us?
            <br /> Please use the contact form below, and we'll get back to you
            promptly.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative border-b border-gray-600 dark:border-gray-400">
                <label
                  htmlFor="firstName"
                  className="text-white dark:text-black text-sm"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="FIRST NAME"
                  className="w-full bg-transparent text-white dark:text-black p-2 outline-none h-16 focus:ring-2 focus:ring-[#4A2CED] dark:focus:ring-[#6B4EF7] placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="relative border-b border-gray-600 dark:border-gray-400">
                <label
                  htmlFor="lastName"
                  className="text-white dark:text-black text-sm"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="LAST NAME"
                  className="w-full bg-transparent text-white dark:text-black p-2 outline-none h-16 focus:ring-2 focus:ring-[#4A2CED] dark:focus:ring-[#6B4EF7] placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative border-b border-gray-600 dark:border-gray-400">
                <label
                  htmlFor="email"
                  className="text-white dark:text-black text-sm"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent text-white dark:text-black p-2 outline-none h-16 focus:ring-2 focus:ring-[#4A2CED] dark:focus:ring-[#6B4EF7] placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="relative border-b border-gray-600 dark:border-gray-400">
                <label
                  htmlFor="phone"
                  className="text-white dark:text-black text-sm"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="PHONE NUMBER"
                  className="w-full bg-transparent text-white dark:text-black p-2 outline-none h-16 focus:ring-2 focus:ring-[#4A2CED] dark:focus:ring-[#6B4EF7] placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative border-b border-gray-600 dark:border-gray-400">
              <label
                htmlFor="message"
                className="text-white dark:text-black text-sm"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                className="w-full bg-transparent text-white dark:text-black p-2 outline-none h-20 focus:ring-2 focus:ring-[#4A2CED] dark:focus:ring-[#6B4EF7] placeholder:text-gray-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center sm:justify-start mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#4A2CED] dark:bg-[#6B4EF7] rounded-full text-center px-10 py-5 shadow-lg flex items-center gap-2 text-white uppercase text-lg hover:bg-[#3920B5] dark:hover:bg-[#5437D6] transition-colors"
                aria-label="Send Message"
              >
                Send Message <MoveUpRight size={24} className="text-white" />
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contactpage;
