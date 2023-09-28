import React from 'react';
import icon from "../../public/wz-icon.png";
import Image from 'next/image';

const Loading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-[#0b071d]'>
        <Image src={icon} width={50} height={50} alt='WZ Icon' className='animate-pulse transition-all ease-linear h-20 w-20 sm:h-24 sm:w-24 md:w-28 md:h-28 lg:w-32 lg:h-32 ' />
    </div>
  )
}

export default Loading;