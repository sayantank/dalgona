import Container from "../components/container";
import Hero from "../components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-28 md:space-y-40">
        <Container>
          <div className="w-full flex flex-col items- mt-20">
            <h1 className="font-serif text-center text-4xl md:text-5xl text-primary mb-12">
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
              <div className="xl:max-w-2xl lg:max-w-sm md:max-w-xs text-center md:text-right text-primary text-sm lg:text-base space-y-4">
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
              <h1 className="font-serif text-center md:text-left text-4xl md:text-5xl text-primary mb-4 md:mb-0">
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
        </Container>
        <Container>
          <div className="mb-20"></div>
        </Container>
      </div>
    </>
  );
}
