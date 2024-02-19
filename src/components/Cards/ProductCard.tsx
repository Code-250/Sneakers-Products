import Image from 'next/image'
import React from 'react'

interface Props {
  imageUrl: string;
  title: string;
  price: string;
  colorNumber: number;
  shoeType: string;
}

function ProductCard(props: Props) {
  const { imageUrl, title, shoeType, price, colorNumber } = props

  return (
    <div>
      <div>
        <Image src={imageUrl} alt={title} width={400} height={400} className='min-h-[300px] max-h-[300px] object-cover' />
      </div>
      <div>
        <h2 className='text-md font-semibold'>{title}</h2>
        <p className='text-neutral-400'>{shoeType}</p>
        <p className='text-neutral-400 text-sm'>{colorNumber} Color</p>
        <p className='text-sm'> Rwf: {price}</p>
      </div>
    </div>
  )
}

export default ProductCard
