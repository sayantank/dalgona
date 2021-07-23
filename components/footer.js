import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary py-12 px-2 md:px-8 flex flex-col md:flex-row md:space-x-16 items-center md:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 w-96 md:w-2/5 gap-4 px-8 md:px-0">
          <div className="flex flex-col space-y-1 justify-center">
            <p className="text-xs font-medium text-secondary">&nbsp;</p>
            <Image
              src="/images/dalgona-logo.png"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="md:text-xs font-medium text-secondary">Marketed by</p>
            <Image
              src="/images/dalgona-logo.png"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="md:text-xs font-medium text-secondary">Marketed by</p>
            <Image
              src="/images/dalgona-logo.png"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="md:text-xs font-medium text-secondary">Marketed by</p>
            <Image
              src="/images/dalgona-logo.png"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 md:py-8">
          <div className="flex-1 space-y-4">
            <div className="space-y-1 text-center md:text-left">
              <h2 className="font-serif font-bold text-secondary text-lg">
                Dalgona Office
              </h2>
              <p className="text-secondary">
                Level 17, 2 Southbank Blvd, Southbank
              </p>
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h2 className="font-serif font-bold text-secondary text-lg">
                Location
              </h2>
              <p className="text-secondary">110 Whites road, Mt. Duneed</p>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif font-bold text-secondary text-xl mb-3">
              Contact Info
            </h2>
            <div className="space-y-1">
              <h2 className="text-secondary font-medium text-lg">Amber Dew</h2>
              <a href="tel:+61499795969">
                <p className="text-secondary">P. +61 499 795 969</p>
              </a>
              <a href="mailto:amber@landlaunch.com.au">
                <p className="text-secondary">amber@landlaunch.com.au</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-tertiary py-5 flex items-center justify-center">
        <p className="text-xs text-white">
          &#169; Copyright 2021. All rights reserved. Designed by XXXX
        </p>
      </div>
    </div>
  );
}
