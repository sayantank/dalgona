import { useState } from 'react'
import Image from "next/image";

const Contact = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [contact, setContact] = useState('')
    const [type, setType] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [disabled, setDisabled] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault()

      setDisabled(true)
      console.log(firstName, lastName, email, phone, contact, type, message)

      let data = {
        name: firstName + " " + lastName,
        email,
        phone,
        contact,
        type,
        message
      }
      
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setFirstName("")
          setLastName("")
          setEmail("")
          setPhone("")
          setContact("")
          setType("")
          setMessage("")
        }
      })  
    }

    return (
        <form id="contact-me" className="w-full max-w-3xl bg-white shadow p-8 text-gray-700 rounded-md mx-auto" onSubmit={handleSubmit}>
        <h3 className="w-full text-xl md:text-2xl font-bold leading-tight">Contact Us!</h3>
        <div className="w-16 h-0.5 bg-mocha mt-6 mb-8 mx-auto"></div>
        <div className="flex flex-wrap mb-3">
          <div className="relative w-full md:w-6/12 md:pr-4 appearance-none label-floating">
            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="first-name" type="text" placeholder="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required />
            <label htmlFor="first-name" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
              First Name </label>
          </div>
          <div className="relative w-full md:w-6/12 md:pl-4 appearance-none label-floating">
            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name" type="text" placeholder="Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required />
            <label htmlFor="last-name" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
              Last Name </label>
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full md:w-6/12 md:pr-4 appearance-none label-floating">
            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="email" type="email" placeholder="Email Address" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
            <label htmlFor="email" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
              Email Address</label>
          </div>
          <div className="relative w-full md:w-6/12 md:pl-4 appearance-none label-floating">
            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone" type="tel" placeholder="Mobile Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
            <label htmlFor="phone" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
              Mobile Number</label>
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <p className="text-mocha text-sm font-medium mb-2">* Preferred method of contact</p>
          <div className="relative w-full appearance-none label-floating">
            <select className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" value={contact} onChange={(e)=>{setContact(e.target.value)}} required>
            <option value="" disabled>
                Select an Option
            </option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
            <p className="text-mocha text-sm font-medium mb-2">* What kind of purchaser are you</p>
          <div className="relative w-full appearance-none label-floating">
            <select className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" value={type} onChange={(e)=>{setType(e.target.value)}} required>
            <option value="" disabled>Select an Option</option>
              <option value="Investor">Investor</option>
              <option value="First Home Buyer">First Home Buyer</option>
              <option value="Upgrading">Upgrading</option>
              <option value="Down-Sizing">Down-Sizing</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="relative w-full appearance-none label-floating">
            <textarea className="autoexpand tracking-wide h-32 py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              id="message" type="text" placeholder="Additional Inquiry..." value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          </div>
        </div>

        <button className="w-full md:w-6/12 shadow bg-mocha hover:bg-charcoal focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit" disabled={disabled}>
            Submit
        </button>

        <div className="text-mocha text-md font-medium mt-8">
          {
            submitted ? <div>Thank you for your interest! <br></br> We will reach out to you soon.</div> : <></>
          }
        </div>
      </form>
    )
}
export default Contact