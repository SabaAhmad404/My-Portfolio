import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mpzndenp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      console.log("Submitting form:", formData);
      console.log("Form submission response:", response);

      if (response.ok) {
        // Form submitted successfully, show a success message
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setSubmitted(true);
      } else {
        // Handle error if the server responds with an error
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
       
    <div className="flex flex-col items-center justify-center lg:ml-[17rem] mt-[4rem]">
        <h1 className="font-black font-Poppins text-slate-950 lg:text-[40px] max-sm:text-[20px]">Contact With Me</h1>
        <p className=" font-Inter text-slate-950 mt-[2rem] max-sm:text-[10px] ">If you want to know more about me or my work, send me a message. I'd love to hear from you.</p>
      <form onSubmit={handleSubmit} className=" mt-8">
        <div className="flex max-sm:flex-col max-sm:items-center max-sm:justify-center gap-[1rem]">
        <div className="mb-4">
        
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 lg:w-[23rem] lg:h-[3.5rem] max-sm:h-[3rem] "
            required
          />
        </div>

        <div className="mb-4">
        
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 lg:w-[23rem] lg:h-[3.5rem] max-sm:h-[3rem] "
            required
          />
        </div>
        </div>

        <div className="mb-4 mt-[1rem]">
         
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 lg:w-[47rem] lg:h-[18rem] max-sm:w-[18rem] max-sm:h-[10rem] "
            required
          />
        </div>

        <div className="flex  items-center justify-center">
          <button
            type="submit"
            className="bg-[#8ebebc] text-white px-4 py-2 w-[10rem] h-[3rem] rounded"
          >
            Send Message
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className="mt-4 text-green-600 font-bold text-center">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
    </div>
  );
};

export default ContactUs;
