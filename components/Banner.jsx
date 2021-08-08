import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const BannerRelative = styled.div``
const ContentAbsolute = styled.div``

export default function Banner() {
  return (
    <BannerRelative className=" relative h-[300px] sm:h-[400px] md:h-[480px]">
      <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />

      <ContentAbsolute className="absolute w-full text-center top-1/2">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
        <button className="px-10 py-4 my-3 font-bold text-purple-500 transition duration-150 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </ContentAbsolute>
    </BannerRelative>
  )
}
