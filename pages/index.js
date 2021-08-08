import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header.jsx'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import styled from 'styled-components'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

//Styled-components layout
const SmallCardContainerGrid = styled.div``
const MediumCardScrollDiv = styled.div``

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json())
  const cardData = await fetch('https://links.papareact.com/zp1').then((res) => res.json())
  return { props: { exploreData, cardData } }
}

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Shirshak Airbn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* Pull some data from a server -Api endpoints */}
          <SmallCardContainerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <div key={item.location}>
                <SmallCard {...item} />
              </div>
            ))}
          </SmallCardContainerGrid>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <MediumCardScrollDiv className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </MediumCardScrollDiv>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by SabHousing"
          buttonText="Get Inspired"
        />

        <Footer />
      </main>
    </div>
  )
}
