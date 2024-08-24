// import { default as Description } from "./Description";
// import { default as ImageContainer } from "./ImageContainer";
// import { default as Services } from "./Services";
// import { default as ServicesInformation } from "./ServicesInformation";

import ServicesA from "./ServicesA";
import ServicesB from "./ServicesB";
import ServicesC from "./ServicesC";
import ServicesD from "./ServicesD";
import ServicesE from "./ServicesE";

// import ServicesInformation from "./ServicesInformation";
import ImageContainerA from "./ImageContainerA";
import DescriptionA from "./DescriptionA";

import ImageContainerB from "./ImageContainerB";
import DescriptionB from "./DescriptionB";

import ImageContainerC from "./ImageContainerC";
import DescriptionC from "./DescriptionC";

import ImageContainerD from "./ImageContainerD";
import DescriptionD from "./DescriptionD";

function OurServices() {
  return (
    <div className="mt-20 lg:mt-40 ">
      <h2 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
        Our Services
      </h2>

      <article className="grid content-center justify-items-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 sm:mx-12 md:mx-20 lg:mx-40 xl:mx-0 2xl:mx-40">
        <ServicesA />
        <ServicesB />
        <ServicesC />
        <ServicesD />
        <ServicesE />
      </article>

      <article className="flex flex-col sm:flex-row sm:items-center sm:justify-around mt-40 lg:mt-30 xl:mt-60 lg:mx-20 xl:mx-32 2xl:mx-44">
        <ImageContainerA />
        <DescriptionA />
      </article>
      {/* xl:mx-10 2xl:mx-72 */}
      <article className="flex flex-col-reverse mt-40 md:mt-0 sm:flex-row sm:items-center sm:justify-around lg:mt-20 lg:mx-20 xl:mx-32 2xl:mx-44 ">
        <DescriptionB />
        <ImageContainerB />
      </article>

      <article className="flex flex-col mt-40 md:mt-0 sm:flex-row sm:items-center sm:justify-around lg:mt-20 lg:mx-20 xl:mx-32 2xl:mx-44">
        <ImageContainerC />
        <DescriptionC />
      </article>

      <article className="flex flex-col-reverse mt-40 md:mt-0 sm:flex-row sm:items-center sm:justify-around lg:mt-20 lg:mx-20 xl:mx-32 2xl:mx-44 ">
        <DescriptionD />
        <ImageContainerD />
      </article>
      {/* <ServicesInformation>
        <h1>Details</h1>
        <ImageContainer />
        <Description />
      </ServicesInformation> */}
    </div>
  );
}

export default OurServices;
