import Image from 'next/image'
import React from 'react'
import section12 from '@/assets/imgs/home page imgs/Frame 492.svg';

export default function UtiliySectionForMobile() {
  return (
    <section className=" w-full">
        <div className="relative w-full h-[70vh] sm:hidden overflow-hidden my-15">
          <Image
            src={section12} 
            alt="section11" 
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
    </section>
  )
}
