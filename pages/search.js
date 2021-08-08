import { format } from 'date-fns'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

const LeftSection = styled.section``
const MobileHidden = styled.div``
const SearchContainerCol = styled.div``

const RightMobileHiddenMap = styled.div``

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then((res) => res.json())
  return { props: { searchResults } }
}

export default function Search({ searchResults }) {
  // console.log(searchResults)
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router?.query
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate}- ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <LeftSection className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} number of guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in Mars</h1>
          <MobileHidden className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
            <p className="button"> Cancellation Flexibility</p>
            <p className="button">Types of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </MobileHidden>

          <SearchContainerCol className="flex flex-col">
            {searchResults.map(({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </SearchContainerCol>
        </LeftSection>

        <RightMobileHiddenMap className="hidden xl:inline-flex xl:min-w-[600px] h-screen">
          <Map searchResults={searchResults} />
        </RightMobileHiddenMap>
      </main>
      <Footer />
    </div>
  )
}
