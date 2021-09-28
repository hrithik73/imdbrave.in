import React, { useEffect, useRef } from "react"
import Header from "../src/components/Header"

import emailjs from "emailjs-com"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
const contact = () => {
  const form = useRef()

  // useEffect(() => {
  //   init("user_uNG2qq06QnbAJmLVx6MmR")
  // }, [])

  const emailJs = {
    serviceID: "service_dheyyi2",
    templateID: "template_ggeqqbu",
    templateParams: "",
    userID: "user_uNG2qq06QnbAJmLVx6MmR",
  }

  //! emailjs.send(serviceID, templateID, templateParams, userID);

  //
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form.current)

    // console.log(e.target.elements.email?.value)
    // console.log(e.target.elements.message?.value)
    const templateParams = {
      from_name:
        e.target.elements.first_name?.value +
        e.target.elements.last_name?.value,
      message: e.target.elements.message?.value,
      email: e.target.elements.email?.value,
    }

    emailjs
      .send(
        emailJs.serviceID,
        emailJs.templateID,
        templateParams,
        emailJs.userID
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Header />
      <div className="flex justify-center py-10 px-5" onSubmit={handleSubmit}>
        <form ref={form} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="first_name"
                type="text"
                // placeholder=""
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="last_name"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="sm:resize-y lg:resize-y  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
            </div>
          </div>
          <div className="md:w-1/3">
            <button className="shadow bg-black hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center px-10 py-3 my-5">
        <div className="self-center border-2 border-red-200 max-w-md bg-white py-2 px-6 sm:py-4 sm:px-10 shadow-lg rounded-lg">
          <p>Contact Me</p>
          <a
            className="flex gap-x-2 text-blue-700"
            href="mailto:dbraveofficial@gmail.com"
          >
            <MdEmail color="black" className="self-center" />
            dbraveofficial@gmail.com
          </a>
        </div>
      </div>
      <h2 className="text-center font-bold">OR</h2>
      <div className="flex justify-center px-10 py-3 my-5">
        <div className="flex-row border-2 border-red-200 max-w-md bg-white py-2 px-6 sm:py-4 sm:px-10 shadow-lg rounded-lg">
          <p>Contact Management</p>
          <a className=" flex gap-x-2 text-blue-700">
            {" "}
            <MdEmail color="black" className="self-center" />{" "}
            dbraveofficial@gmail.com
          </a>
          <p className="flex gap-x-2 ">
            {" "}
            <FaPhoneAlt className="self-center" /> +91 9113140154
          </p>
        </div>
      </div>
    </>
  )
}
export default contact
