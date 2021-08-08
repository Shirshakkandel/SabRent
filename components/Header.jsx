import { useState } from 'react'
import styled from 'styled-components'
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'

//styled Overview
const HeaderGrid = styled.header``
const Left = styled.div``
const MiddleSearch = styled.div``
const Right = styled.div``

const DateRangeCol = styled.div``
const GuestFlex = styled.div``
const ActionButtonFlex = styled.div``

import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

export default function Header({ placeholder }) {
  const router = useRouter()
  const [selectInput, setSelectInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  function resetInput() {
    setSelectInput('')
  }

  function search() {
    router.push({
      pathname: '/search',
      query: {
        location: selectInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }
  return (
    <HeaderGrid className="sticky top-0 z-50 grid grid-cols-3 p-5 px-5 py-5 bg-white shadow-md md:px-10 ">
      <Left
        onClick={() => router.push('/')}
        className="relative flex items-center h-10 my-auto cursor-pointer"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </Left>

      <MiddleSearch className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          value={selectInput}
          onChange={(e) => setSelectInput(e.target.value)}
          className="flex-1 pl-5 text-sm text-gray-500 placeholder-gray-400 bg-transparent outline-none "
          type="text"
          placeholder={placeholder || 'Start your search'}
        />

        <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </MiddleSearch>

      <Right className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </Right>

      {selectInput && (
        <DateRangeCol className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />

          <GuestFlex className="flex items-center mb-4 border-b">
            <h2 className="flex-grow text-2xl font-semibold">Number of guest</h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </GuestFlex>

          <ActionButtonFlex className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </ActionButtonFlex>
        </DateRangeCol>
      )}
    </HeaderGrid>
  )
}
