import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import styled from 'styled-components'

const Flex = styled.div``
const Left = styled.div``
const RightCol = styled.div``
const TopRight = styled.div``
const ButtomRight = styled.div``

export default function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <Flex className="flex px-2 pr-4 transition duration-200 ease-out border-b cursor-pointer py-7 hover:opacity-80 hover:shadow-lg first:border-t">
      <Left className="relative flex flex-shrink-0 w-40 h-36 md:h-52 md:w-80">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </Left>

      <RightCol className="flex flex-col flex-grow pl-5">
        <TopRight className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="cursor-pointer h-7" />
        </TopRight>

        <div className="text-xl">{title}</div>
        <div className="w-10 pt-2 border-b" />
        <div className="flex-grow pt-2 text-sm text-gray-500">{description}</div>

        <ButtomRight className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </ButtomRight>
      </RightCol>
    </Flex>
  )
}
