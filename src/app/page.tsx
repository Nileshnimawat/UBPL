
import ImageCarousel from "../../components/Home/ImageCarousel";
import WhoWeAre from "../../components/Home/WhoWeAre";
import WhatWeDo from "../../components/Home/WhatWeDo";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import MilestoneTimeline from "../../components/Home/MilestoneTimeline";
import ClientsSection from "../../components/Home/ClientsSection";
import ContactsSection from "../../components/Home/ContactsSection";
export default function Home() {
  return (
    <>


   <ImageCarousel/>
   <div className="flex flex-col gap-5">
   <WhoWeAre/>
   <WhyChooseUs/>
   <WhatWeDo/>
   <MilestoneTimeline/>
   <ClientsSection/>
   <ContactsSection/>


   </div>

 
    </>
  );
}
