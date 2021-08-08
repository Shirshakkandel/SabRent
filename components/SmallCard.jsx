import styled from 'styled-components'
import Image from 'next/image'
//Styled components
const Flex = styled.div``
const Left = styled.div``
const Right = styled.div``

export default function SmallCard({ img, location, distance }) {
  return (
    <Flex className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      <Left className="relative w-16 h-16">
        <Image src={img} layout="fill" objectFit="contain" />
      </Left>

      <Right>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </Right>
    </Flex>
  )
}
