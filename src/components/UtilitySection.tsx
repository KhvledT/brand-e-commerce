import section11 from '@/assets/imgs/home page imgs/Section 11.svg';
import Image from 'next/image';

const UtilitySection = () => {
  return (
      <section className=" w-full">
          <div className="relative w-full hidden sm:block sm:h-45 md:h-50 lg:h-60 xl:h-70 2xl:h-80 overflow-hidden">
            <Image
              src={section11} 
              alt="section11" 
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
      </section>
  );
};

export default UtilitySection;