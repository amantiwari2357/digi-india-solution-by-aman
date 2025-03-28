import React from 'react'
import HeroSection from  "@/components/Sections/HeroSection";
import CrossAnimation from "@/components/Sections/CrossAnimation";
import Creative from "@/components/Sections/Creative";
import TextAnimation from "@/components/Sections/TextAnimation";
import OurWork from "@/components/Sections/OurWork";
import GetInTouch from "@/components/Sections/GetInTouch";
import Feed from "@/components/Sections/Feed";
import WorkPlace from "@/components/Sections/WorkPlace";

const page = () => {
  return (
    <div>
      <HeroSection />
      <CrossAnimation/>
      <Creative/>
      <TextAnimation/>
      <OurWork/>
      <GetInTouch/>
      <Feed/>
      <WorkPlace/>
    </div>
  )
}

export default page
