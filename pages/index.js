import Container from "../components/container";
import Hero from "../components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="overflow-hidden">
        <Container>
          <div className="w-full flex flex-col items- mt-20">
            <h1 className="font-serif text-center text-3xl md:text-4xl text-primary mb-12">
              THE DALGONA AT DUNEED
            </h1>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  width={1280}
                  height={720}
                  layout="responsive"
                />
              </div>
              <div className="2xl:max-w-lg xl:max-w-md lg:max-w-cd md:max-w-xs text-center md:text-right text-primary text-sm lg:text-base space-y-4">
                <p>
                  Inspired by the Victorian Culture, we deliver to you the
                  perfect land estate manifested with the amalgamation of our
                  beautiful surf coast culture blended with the essential
                  elements of our daily life: the coffee, the bush, the ocean,
                  the sun, and our serene land. At Dalgona, we are as local as
                  your coffee.
                </p>
                <p>
                  Dalgona At Duneed is a land estate located at Mt Duneed near
                  the surf coast highway and the Armstrong Creek Towncentre,
                  which provides residents with a comfortable and enjoyable
                  lifestyle at the same time. The estate is located in between
                  the surf coast and the city of Geelong. Explore the lifestyle
                  at our sustainable master-planned community, which consists of
                  over 170 premium lots designed to suit your needs and wants.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="max-w-sm">
              <h1 className="font-serif text-center md:text-left text-3xl md:text-4xl text-primary mb-4 md:mb-0">
                MT DUNEED AND BEYOND
              </h1>
            </div>
            <div className="flex-1 text-primary text-sm lg:text-base text-center md:text-left">
              <p>
                Located near the surf coast highway, The Dalgona at Duneed is
                situated right between Geelong CBD and The Great Ocean Road.
                Adjacent to the Armstrong Creek, the neighbourhood includes the
                town centre, schools, parks, shops, medical centre, aged care,
                childcare, public transport and the beautiful coastal nature.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Image
              src="/images/map.jpeg"
              width={2000}
              height={1000}
              layout="responsive"
            />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:max-w-xs">
              <h1 className="font-serif text-center md:text-left text-3xl md:text-4xl text-primary mb-4 md:mb-0">
                THE
                <br />
                DALGONA
                <br />
                LIVING
              </h1>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4 xl:gap-8">
              <div className="flex flex-col space-y-2">
                <Image
                  src="/images/block.svg"
                  width={1280}
                  height={720}
                  layout="responsive"
                />
                <p className="text-primary">Swimming Pool</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Image
                  src="/images/block.svg"
                  width={1280}
                  height={720}
                  layout="responsive"
                />
                <p className="text-primary">Swimming Pool</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Image
                  src="/images/block.svg"
                  width={1280}
                  height={720}
                  layout="responsive"
                />
                <p className="text-primary">Swimming Pool</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Image
                  src="/images/block.svg"
                  width={1280}
                  height={720}
                  layout="responsive"
                />
                <p className="text-primary">Swimming Pool</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Image
                  src="/images/block.svg"
                  width={1280}
                  height={720}
                  layout="responsive"
                />
                <p className="text-primary">Swimming Pool</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Image
                  src="/images/block.svg"
                  width={1280}
                  height={720}
                  layout="responsive"
                />
                <p className="text-primary">Swimming Pool</p>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="text-primary md:text-xl text-lg text-center uppercase">
            <p>
              THE IDEA OF DALGONA AT DUNEED IS TO CREATE A SUSTAINABLE COMMUNITY
              FOR THE PEOPLE OF GEELONG WHICH IS AS LOCAL AS YOUR COFFEE. OUR
              MASTERPLANNED COMMUNITY IS DEVELOPED BY A LOCAL GEELONG COMPANY
              “GAAGE DEVELOPMENTS”.
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/images/life.png"
              width={2000}
              height={1000}
              layout="responsive"
            />
          </div>
        </Container>
        {/* <Container>
          <h1 className="font-serif text-center md:text-left text-3xl md:text-4xl text-primary mb-4 md:mb-0">
            UPDATES
          </h1>
        </Container>
        <div className="-mt-36 ml-40 w-full">
          <div className="overflow-x-auto inline-block">
            <div className="w-96 inline-block">
              <Image
                src="/images/block.svg"
                width={1280}
                height={720}
                layout="responsive"
              />
              <p className="text-primary mt-6">
                Located near the surf coast highway, The Dalgona at Duneed is
                situated right between Geelong CBD and The Great Ocean Road.
              </p>
            </div>
            <div className="w-96 inline-block">
              <Image
                src="/images/block.svg"
                width={1280}
                height={720}
                layout="responsive"
              />
              <p className="text-primary mt-6">
                Located near the surf coast highway, The Dalgona at Duneed is
                situated right between Geelong CBD and The Great Ocean Road.
              </p>
            </div>
            <div className="w-96 inline-block">
              <Image
                src="/images/block.svg"
                width={1280}
                height={720}
                layout="responsive"
              />
              <p className="text-primary mt-6">
                Located near the surf coast highway, The Dalgona at Duneed is
                situated right between Geelong CBD and The Great Ocean Road.
              </p>
            </div>
            <div className="w-96 inline-block">
              <Image
                src="/images/block.svg"
                width={1280}
                height={720}
                layout="responsive"
              />
              <p className="text-primary mt-6">
                Located near the surf coast highway, The Dalgona at Duneed is
                situated right between Geelong CBD and The Great Ocean Road.
              </p>
            </div>
          </div>
        </div> */}
        <Container>
          <div className="mb-20"></div>
        </Container>
      </div>
    </>
  );
}
