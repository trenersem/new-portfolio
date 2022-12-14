import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div
      id="contact"
      className="w-full lg:h-screen overflow-x-hidden max-w-[100wv]"
    >
      <motion.div
        className="max-w-[1240px] m-auto px-4 py-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Semenov Volodymyr</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/volodymyr-semenov-872980224/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/trenersem"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <motion.div
            className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="p-4">
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/93a3da623ad793b2e84d36c4508582eb"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.name && (
                      <p className=" text-red-500 mt-1">
                        {errors.name === "required" &&
                          "This field is required."}
                        {errors.name === "maxLength" &&
                          "Max length is 100 char"}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      {...register("phone", {
                        required: true,
                        pattern:
                          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                      })}
                    />
                    {errors.phone && (
                      <p className=" text-red-500 mt-1">
                        {errors.phone.type === "required" &&
                          "This field is required."}
                        {errors.phone.type === "pattern" &&
                          "Invalid phone number."}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className=" text-red-500 mt-1">
                      {errors.email.type === "required" &&
                        "This field is required."}
                      {errors.email.type === "pattern" &&
                        "Invalid email address."}
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    {...register("subject", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.subject && (
                    <p className=" text-red-500 mt-1">
                      {errors.subject === "required" &&
                        "This field is required."}
                      {errors.subject === "maxLength" &&
                        "Max length is 100 char"}
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500">
                      {errors.message.type === "required" &&
                        "This field is required."}
                      {errors.message.type === "maxLength" &&
                        "Max length is 2000 char."}
                    </p>
                  )}
                </div>
                <button className="w-full p-4 text-gray-700 mt-4" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
