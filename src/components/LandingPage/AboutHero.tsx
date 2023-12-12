import SectionWrapper from "@/components/SectionWrapper";

const AboutHero: React.FC = () => {
  return (
 <SectionWrapper>
     <div className="lg:flex-row flex-col flex w-full max-w-full justify-between mb-20 lg:mb-32 gap-8 items-center py-8">
      
      
    <div className="md:flex-row flex-col flex w-full max-w-full justify-between mb-20 lg:mb-32 gap-8 items-center  py-8">
      {/* first content */}
      <div className="flex flex-col items-start gap-4">
        <span className="text-[#758585] uppercase font-normal text-base md:text-xl">
          Welcome To
        </span>
        <h1 className="text-[#282d3c] uppercase font-bold text-4xl md:text-8xl">
          Rise High Hotel
        </h1>
        <div className="border border-opacity-25 border-blue-400 w-20 mt-6" />
        <p className="text-[#758585] font-normal mt-4 text-2xl text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          unde fuga saepe dolor nulla, suscipit accusamus laboriosam sed
          deserunt sit corrupti incidunt odit voluptas nihil qui atque illum
          expedita beatae.
        </p>
        <button className="bg-blue-400 rounded-md mt-4 p-4 text-white text-xl">
          <span>More Details</span>
        </button>
      </div>
      {/* second: image content */}
      <img
        src="/images/hero4.jpg"
        alt="hotel building"
        className="lg:w-[50%] md:h-[50%] w-full h-full rounded-lg"
      />
    </div>
    </div>
 </SectionWrapper>
  );
};

export default AboutHero;
