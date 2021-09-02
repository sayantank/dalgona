import Image from "next/image";
import { useState } from 'react'

export default function Footer() {


  const [submitText, setSubmitText] = useState('Submit')

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value;
    const mobile = e.target.mobile.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const message = e.target.message.value;

    let data = {
      name,
      email,
      phone: mobile,
      contact: mobile,
      type: address,
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
      setSubmitText("Form Submitted!")
      e.target.reset();
      // console.log('Response received')
      // if (res.status === 200) {
      //   console.log('Response succeeded!')
      // }
    })  
  }

  return (
    <div className="flex flex-col">
      <div className="bg-white py-10 px-2 md:px-8 flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row md:space-x-8">
        <div className="px-10 flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap4 mx-4 my-8">
          <div className="px-10">
            <Image
              src="/images/dalgona-logo.png"
              width={3}
              height={1}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col text-center px-10">
            <p className="md:text-xs font-medium text-tertiary">Marketed by</p>
            <Image
              src="/images/landlaunch.png"
              width={7.5}
              height={1}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col text-center px-10">
            <p className="md:text-xs font-medium text-tertiary">Project by</p>
            <Image
              src="/images/maax.png"
              width={100}
              height={40}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col text-center px-10">
            <p className="md:text-xs font-medium text-tertiary">Marketed by</p>
            <Image
              src="/images/gaage.png"
              width={180}
              height={70}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="font-serif font-bold text-tertiary text-lg">
              Landlaunch Office
            </h2>
            <p className="text-tertiary">
              Level 17, 2 Southbank Blvd, Southbank
            </p>
          </div>
          <div>
            <h2 className="font-serif font-bold text-tertiary text-lg">
              Land Sales Office
            </h2>
            <p className="text-tertiary">
              420 Horseshoe Bend Road, Armstrong Creek VIC 3217
            </p>
          </div>
          <div>
            <h2 className="font-serif font-bold text-tertiary text-lg">
              Contact
            </h2>
            <p className="text-tertiary">
              <strong>Amber Dew</strong>
              <br/>
              <a href="mailto:amber@landlaunch.com.au">amber@landlaunch.com.au</a>
              <br/>
              <a href="tel:+61499795969">+61 499 795 969</a>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className=" bg-quaternary flex flex-col space-y-4  p-6 md:p-8 rounded-md">
            <h1 className="font-serif text-3xl md:text-4xl text-tertiary">
              Contact Us
            </h1>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                className="w-full border-b border-tertiary py-2 px-3 bg-transparent"
                type="text"
                placeholder="Name"
                name="name"
                required={true}
              />
              <input
                className="w-full border-b border-tertiary py-2 px-3 bg-transparent"
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                required={true}
              />
              <input
                className="w-full border-b border-tertiary py-2 px-3 bg-transparent"
                type="text"
                placeholder="Email"
                name="email"
                required={true}
              />
              <input
                className="w-full border-b border-tertiary py-2 px-3 bg-transparent"
                type="text"
                placeholder="Address"
                name="address"
                required={true}
              />
              <textarea
                className="w-full border-b border-tertiary py-2 px-3 bg-transparent"
                type="textbox"
                placeholder="Message"
                name="message"
                required={true}
              />
              <button className="border-none bg-tertiary text-white rounded-md px-4 py-2">
                {submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="bg-quaternary py-12 px-2 md:px-8 flex flex-col md:flex-row md:space-x-16 items-center md:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 md:w-2/5 gap-8 px-12 md:px-0 mb-8 md:mb-0">
          <div className="flex flex-col space-y-1 justify-center">
            <Image
              src="/images/dalgona-logo.png"
              width={150}
              height={50}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="md:text-xs font-medium text-tertiary">Marketed by</p>
            <Image
              src="/images/landlaunch-land.png"
              width={320}
              height={80}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="md:text-xs font-medium text-tertiary">Project by</p>
            <Image
              src="/images/maax-logo.svg"
              width={100}
              height={50}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="md:text-xs font-medium text-tertiary">Marketed by</p>
            <Image
              src="/images/gaage-1.png"
              width={280}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 md:py-8">
          <div className="flex-1 space-y-4">
            <div className="space-y-1 text-center md:text-left">
              <h2 className="font-serif font-bold text-tertiary text-lg">
                Dalgona Office
              </h2>
              <p className="text-tertiary">
                Level 17, 2 Southbank Blvd, Southbank
              </p>
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h2 className="font-serif font-bold text-tertiary text-lg">
                Location
              </h2>
              <p className="text-tertiary">110 Whites road, Mt. Duneed</p>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif font-bold text-tertiary text-xl mb-3">
              Contact Info
            </h2>
            <div className="space-y-1">
              <h2 className="text-tertiary font-medium text-lg">Amber Dew</h2>
              <a href="tel:+61499795969">
                <p className="text-tertiary">P. +61 499 795 969</p>
              </a>
              <a href="mailto:amber@landlaunch.com.au">
                <p className="text-tertiary">amber@landlaunch.com.au</p>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-tertiary py-5 flex items-center justify-center">
        <p className="text-xs text-white">
          &#169; Copyright 2021. All rights reserved.
        </p>
      </div>
    </div>
  );
}
