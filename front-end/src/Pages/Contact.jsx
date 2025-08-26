import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";

const Details = ({ icon: Icon, value }) => (
  <div className="flex items-center gap-2 w-full mb-2">
    <div className="flex justify-center items-center w-8 h-8 bg-[#3B3B3B] rounded-md">
      <Icon className="text-2xl" />
    </div>
    <p>{value}</p>
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    industry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ENV Keys
  const isProd = import.meta.env.PROD;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const DEV_SERVICE_ID = "your_dev_service_id";
  const DEV_TEMPLATE_ID = "your_dev_template_id";
  const DEV_PUBLIC_KEY = "your_dev_public_key";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const activeServiceId = isProd ? SERVICE_ID : DEV_SERVICE_ID;
    const activeTemplateId = isProd ? TEMPLATE_ID : DEV_TEMPLATE_ID;
    const activePublicKey = isProd ? PUBLIC_KEY : DEV_PUBLIC_KEY;

    if (isProd && (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY)) {
      toast.error("Email service not configured. Contact site admin.", { theme: "dark" });
      setIsSubmitting(false);
      return;
    }

    // Payload
    const payload = {
      from_name: formData.user_name,
      from_email: formData.user_email,
      industry: formData.industry,
      message: formData.message,
    };

    console.log("📨 Sending payload:", payload);

    try {
      await emailjs.send(activeServiceId, activeTemplateId, payload, activePublicKey);
      toast.success("✅ Message sent successfully!", { theme: "dark" });
      setFormData({ user_name: "", user_email: "", industry: "", message: "" });
    } catch (err) {
      console.error("❌ EmailJS Error:", err);
      if (err.text && err.text.includes("Invalid grant")) {
        toast.error(
          "⚠️ Gmail account authorization failed. Please reconnect your Gmail service in EmailJS.",
          { theme: "dark" }
        );
      } else {
        toast.error("Failed to send message. Try again later.", { theme: "dark" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex justify-center items-center w-full h-auto lg:h-screen px-2 py-5">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-[1000px] h-auto p-2">
        
        {/* Form */}
        <div className="flex flex-col order-1 sm:order-0 bg-[#222222] text-white w-full sm:w-70 h-90 rounded-lg p-3">
          <p>Lets Communicate</p>
          <form onSubmit={handleSubmit} className="w-full mt-4">
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full text-sm py-1.5 px-4 text-[#a5a4a4] bg-[#282828] border border-[#868686] focus:outline-[#868686] rounded-md mb-3"
            />
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full text-sm py-1.5 px-4 text-[#a5a4a4] bg-[#282828] border border-[#868686] focus:outline-[#868686] rounded-md mb-3"
            />
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              placeholder="Your Services"
              className="w-full text-sm py-1.5 px-4 text-[#a5a4a4] bg-[#282828] border border-[#868686] focus:outline-[#868686] rounded-md mb-3"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full h-25 text-sm py-1.5 px-4 text-[#a5a4a4] bg-[#282828] border border-[#868686] focus:outline-[#868686] rounded-md mb-3"
            />
            <button
              type="submit"
              className="relative bg-[#D5D5D5] hover:bg-[#a8a8a8] cursor-pointer text-black text-sm w-full py-1.5 rounded-md duration-300"
            >
              {isSubmitting && (
                <span className="absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="animate-spin h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                </span>
              )}
              <span className={`transition-opacity duration-300 ${isSubmitting ? "opacity-50" : "opacity-100"}`}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>

        {/* Details */}
        <div className="flex flex-col text-[#FFFF] w-full sm:w-1/2 h-auto sm:h-90 mb-4">
          <h1 className="text-4xl flex justify-center sm:justify-start">
            CONTACT <span className="font-bold ml-1">ME</span>
          </h1>
          <h2 className="text-md sm:text-lg mb-4 flex justify-center sm:justify-start">What I can do</h2>
          <p className="mb-4">
            I’m currently open to full-time opportunities, freelance work, or developer roles where I can contribute and grow.
          </p>

          <Details icon={VscLocation} value="South Africa, Pretoria" />
          <Details icon={MdOutlineMail} value="khutsomakunyane1@gmail.com" />
          <Details icon={MdOutlineLocalPhone} value="064 857 1755" />
        </div>
      </div>
    </main>
  );
}
