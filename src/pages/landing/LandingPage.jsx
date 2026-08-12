import React from 'react'
import HomeHeroSection from '../../component/home/HomeHeroSection'
import HomeAboutSection from '../../component/home/HomeAboutSection'
import HomeSpaceMissions from '../../component/home/HomeSpaceMissions'
import HomeTechnologySection from '../../component/home/HomeTechnologySection'
import HomeFutureExplorationSection from '../../component/home/HomeFutureExplorationSection'
import HomeBlogSection from '../../component/home/HomeBlogSection'
import HomeContactUsSection from '../../component/home/HomeContactUsSection'

const LandingPage = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeSpaceMissions />
      <HomeTechnologySection />
      <HomeFutureExplorationSection />
      <HomeBlogSection />
      <HomeContactUsSection />
      
    </div>
  )
}

export default LandingPage
