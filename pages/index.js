import Container from "../components/container";
import Hero from "../components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="overflow-hidden">
        {/* DALGONA AT DUNEED SECTION */}

        <Container>
          <div className="flex flex-col space-y-8">
            <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h1 className="font-serif text-3xl md:text-4xl text-tertiary mb-4">
                  THE DALGONA AT DUNEED
                </h1>
              </div>
              <div className="flex-2">
                <div className="text-tertiary md:text-sm lg:text-base space-y-4">
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
                    the surf coast and the city of Geelong. Explore the
                    lifestyle at our sustainable master-planned community, which
                    consists of over 170 premium lots designed to suit your
                    needs and wants.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex space-x-4">
              <div className="w-full flex flex-col sm:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-1">
                  <Image
                    layout="responsive"
                    width={4}
                    height={3}
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  />
                </div>
                <div className="flex-2">
                  <Image
                    layout="responsive"
                    width={4}
                    height={3}
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </Container>
        <Container>
          <div>
            <div className="flex md:flex-row flex-col ">
              <div className="flex-1 md:-mr-12 md:z-10 mb-4 ">
                <Image
                  layout="responsive"
                  width={4}
                  height={3}
                  className="border-image"
                  src="/images/image1.jpg"
                />
              </div>
              <div className="flex-1 md:mt-12">
                <Image
                  layout="responsive"
                  width={4}
                  height={3}
                  className="border-image"
                  src="/images/image2.jpg"
                />
              </div>
            </div>
          </div>
        </Container>
        {/* <Container>
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
        </Container> */}

        {/* MT DUNEED SECTION */}

        <Container>
          <div className="flex flex-col space-y-8">
            <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h1 className="font-serif text-3xl md:text-4xl text-tertiary mb-4">
                  MT DUNEED & BEYOND
                </h1>
              </div>
              <div className="flex-2">
                <div className="text-tertiary md:text-sm lg:text-base space-y-4">
                  <p>
                    Located near the surf coast highway, The Dalgona at Duneed
                    is situated right between Geelong CBD and The Great Ocean
                    Road. Adjacent to the Armstrong Creek, the neighbourhood
                    includes the town centre, schools, parks, shops, medical
                    centre, aged care, childcare, public transport and the
                    beautiful coastal nature.
                  </p>
                </div>
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
          </div>
        </Container>
        {/* <Container>
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
        </Container> */}

        {/* DALGONA LIVING SECTION */}

        <Container>
          <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="md:border-r-2 border-b-2 border-tertiary flex flex-col items-center justify-center py-5">
              <h1 className="font-serif text-4xl md:text-5xl text-tertiary">
                25 mins
              </h1>
              <p className="text-tertiary font-medium">to the City Centre</p>
            </div>

            <div className="md:border-r-2 border-b-2 border-tertiary flex flex-col items-center justify-center py-5">
              <h1 className="font-serif text-4xl md:text-5xl text-tertiary">
                25 mins
              </h1>
              <p className="text-tertiary font-medium">to the City Centre</p>
            </div>
            <div className="border-b-2 border-tertiary flex flex-col items-center justify-center py-5">
              <h1 className="font-serif text-4xl md:text-5xl text-tertiary">
                25 mins
              </h1>
              <p className="text-tertiary font-medium">to the City Centre</p>
            </div>
            <div className="md:border-r-2 border-b-2 md:border-b-0 border-tertiary flex flex-col items-center justify-center py-5">
              <h1 className="font-serif text-4xl md:text-5xl text-tertiary">
                25 mins
              </h1>
              <p className="text-tertiary font-medium">to the City Centre</p>
            </div>
            <div className="md:border-r-2 border-b-2 md:border-b-0 border-tertiary flex flex-col items-center justify-center py-5">
              <h1 className="font-serif text-4xl md:text-5xl text-tertiary">
                25 mins
              </h1>
              <p className="text-tertiary font-medium">to the City Centre</p>
            </div>
            <div className="border-tertiary flex flex-col items-center justify-center py-5">
              <h1 className="font-serif text-4xl md:text-5xl text-tertiary">
                25 mins
              </h1>
              <p className="text-tertiary font-medium">to the City Centre</p>
            </div>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-tertiary mb-4">
                THE DALGONA
                <br />
                LIVING
              </h1>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap space-y-8 md:space-y-0 md:space-x-4">
              <div className="flex-1 flex flex-col space-y-6">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    width={4}
                    height={3}
                    layout="responsive"
                  />
                </div>
                <div className="text-tertiary md:text-sm lg:text-base space-y-2">
                  <h2 className="font-serif text-xl">Armstrong Creek Town Centre</h2>
                  <p>
                  The ultra-modern Towncentre is the largest privately owned town centre with a deliverable value of $1 billion dollars to the residents of Armstrong Creek and Mt Duneed. The town centre plan includes supermarkets, restaurants, retail centre, business parks, employment precincts and leisure destinations. A massive retail centre is already delivered in the area with more infrastructure coming soon.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-6">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    width={4}
                    height={3}
                    layout="responsive"
                  />
                </div>
                <div className="text-tertiary md:text-sm lg:text-base space-y-2">
                  <h2 className="font-serif text-xl">Geelong Lutheran College</h2>
                  <p>
                  Geelong Lutheran College Armstrong Creek, established in 2009, is a co-educational Primary and Secondary school offering education for students from Prep to Year 12. The Lutheran Education system is the second largest non-government system providing for over 40,000 students across Australia. It is prestigious christian values based school, catering a multicultural community at Armstrong Creek.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-6">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    width={4}
                    height={3}
                    layout="responsive"
                  />
                </div>
                <div className="text-tertiary md:text-sm lg:text-base space-y-2">
                  <h2 className="font-serif text-xl">The Creek & The Parks</h2>
                  <p>
                  The estate is located adjacent to a lush green and serene creek which stretches for miles. Further, there are cycling/walking pathways, parklands and water bodies located in the area which makes living close to the nature a delightful experience. You’ll be living at a location where you’ll feel like being outdoors and enjoying it.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-6">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    width={4}
                    height={3}
                    layout="responsive"
                  />
                </div>
                <div className="text-tertiary md:text-sm lg:text-base space-y-2">
                  <h2 className="font-serif text-xl">Surf Coast Highway</h2>
                  <p>
                    It is a huge advantage when you’re close to the highway. The surf coast Highway is connected to the whites road and provides easy access to reach Geelong CBD or Torquay in just 15 minutes. It is just  a kilometre away from the estate entrance.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-6">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    width={4}
                    height={3}
                    layout="responsive"
                  />
                </div>
                <div className="text-tertiary md:text-sm lg:text-base space-y-2">
                  <h2 className="font-serif text-xl">TLC Primary Care & Aged Care</h2>
                  <p>
                  TLC is a dedicated centre to recieve personalised, professional and quality healthcare services, allied heathcare services and aged care services. Located just minutes from Dalgona At Duneed, the primary healthcare centre also provides specialised services such as chronic disease management, dietetics, hydrotherapy, nurse immuniser, podiatry and physiotherapy. Furthermore, the aged care center is closeby as well.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-6">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    width={4}
                    height={3}
                    layout="responsive"
                  />
                </div>
                <div className="text-tertiary md:text-sm lg:text-base space-y-2">
                  <h2 className="font-serif text-xl">Mirripoa Primary School</h2>
                  <p>
                  A primary school with a state of the art learning facility designed using latest research on effective learning environments. The professional and caring staff of the school utilises evidence based teaching strategies to deliver strong academic achievement. The school curriculum is based on the Victorian Curriculum with a strong focus on literacy and numeracy. Moreover, the school offers specialist programs in arts, physical education, LOTE and visual arts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* <Container>
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
        </Container> */}

        {/* INSPIRATION SECTION */}

        <Container>
          <div className="flex flex-col-reverse md:flex-row md:space-x-8">
            <div className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className="flex-1 mb-8 md:mb-0">
              <h1 className="font-serif text-3xl md:text-4xl text-tertiary my-4">
                INSPIRATION
              </h1>
              <div className="text-tertiary text-base space-y-4">
                <p>
                  The true essence of our beautiful culture celebrated by the
                  millions of beautiful people in our country has been brought
                  to life at your very own Dalgona At Duneed. The Estate is in a
                  shape of a coffee cup, the favourite beverage of our fellow
                  Australians, consisting of 170 lots including 32 townhouses.
                  The estate is adjacent to the serene and beautiful Armstrong
                  creek, hence, connecting you with our aweispiring mother earth
                  right in your backyard. Live this beautiful Surf Coast
                  lifestyle at our sustainable and functional estate at Mt
                  Duneed. Live The Dalgona Life. #DalgonaAtDuneed.
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* RANDOM TEXT SECTION */}

        <div className="bg-quaternary py-8 relative">
          <div className="absolute w-full -mt-16 flex justify-center">
            <div className="h-24 w-24">
              <Image
                layout="responsive"
                width={1}
                height={1}
                src="/images/dalgona-icon.png"
              />
            </div>
          </div>
          <Container>
            <h1 className="font-serif text-center text-2xl md:text-3xl text-tertiary my-16 tracking-wider">
              THE IDEA OF DALGONA AT DUNEED IS TO CREATE A SUSTAINABLE COMMUNITY
              FOR THE PEOPLE OF GEELONG WHICH IS AS LOCAL AS YOUR COFFEE. OUR
              MASTERPLANNED COMMUNITY IS DEVELOPED BY A LOCAL GEELONG COMPANY
              “GAAGE DEVELOPMENTS”.
            </h1>
          </Container>
        </div>
        <Container>
          <div className="mt-8">
            <Image
              src="/images/life.png"
              width={2000}
              height={1000}
              layout="responsive"
            />
          </div>
        </Container>

        <Container>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="font-serif text-3xl md:text-4xl text-tertiary my-4">
                Updates
              </h1>
              <p>See All</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-8">
              <div className="flex-1 flex flex-col space-y-4">
                <Image
                  layout="responsive"
                  width={4}
                  height={3}
                  className="border-image"
                  src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                />
                <div className="text-tertiary text-base space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet{" "}
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-4 mt-10">
                <Image
                  layout="responsive"
                  width={4}
                  height={3}
                  className="border-image"
                  src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                />
                <div className="text-tertiary text-base space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet{" "}
                  </p>
                </div>
              </div>
            </div>
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
