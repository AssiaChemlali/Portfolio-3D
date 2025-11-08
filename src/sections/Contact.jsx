import React, { useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import { IoIosArrowRoundDown } from "react-icons/io";
import emailjs from "@emailjs/browser"
import Button from '../components/Button';
const Contact = () => {

  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
console.log("sending")
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("EmailJS Error:", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section id="contact" className='px-5 md:px-20 mt-20'>
      <TitleHeader
        subtitle="💬 Have questions or ideas? Let’s talk! 🚀"
        title="Get in Touch – Let’s Connect" />
      <div className="flex flex-col xl:flex-row items-center justify-between gap-10 mt-10">
        {/* LEFT */}
        <form
          ref={formRef}
          className='w-full xl:w-[40%] p-10 bg-black-100 rounded-xl flex flex-col gap-10 border border-black-200'
          onSubmit={handleSubmit}>
          <div className='flex flex-col gap-3'>
            <label htmlFor="name" className='text-white-50'>Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder='What s your good name'
              className='p-5 bg-black-200 rounded-lg text-white-50' required />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="email" className='text-white-50'>Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email adress"
              className='p-5 bg-black-200 rounded-lg text-white-50' required />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="message" className='text-white-50'>Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you"
              className='p-5 bg-black-200 rounded-lg text-white-50' required></textarea>
          </div>
         

           <Button
              text= {
                loading ? "Sending ..." : "send message"}
              id="button"
              type="submit"
              icon={<IoIosArrowRoundDown />} />
        </form>
        {/* RIGHT */}
        <div className='w-full xl:w-[60%] flex flex-col '>
          <img src="/images/conatct.PNG" alt="" className=' rounded-xl object-cover' />
        </div>
      </div>

    </section>
  )
}

export default Contact
