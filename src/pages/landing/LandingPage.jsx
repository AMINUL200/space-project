import React, { useEffect } from 'react'
import HomeHeroSection from '../../component/home/HomeHeroSection'
import HomeAboutSection from '../../component/home/HomeAboutSection'
import HomeSpaceMissions from '../../component/home/HomeSpaceMissions'
import HomeTechnologySection from '../../component/home/HomeTechnologySection'
import HomeFutureExplorationSection from '../../component/home/HomeFutureExplorationSection'
import HomeBlogSection from '../../component/home/HomeBlogSection'
import HomeContactUsSection from '../../component/home/HomeContactUsSection'
import PageLoader from '../../component/common/PageLoader'
import HomeTeamSection from '../../component/home/HomeTeamSection'
import HomeGallerySection from '../../component/home/HomeGallerySection'

const LandingPage = () => {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeSpaceMissions />
      <HomeTechnologySection />
      <HomeFutureExplorationSection />
      <HomeGallerySection />
      <HomeTeamSection />
      {/* <HomeBlogSection /> */}
      <HomeContactUsSection />

    </div>
  )
}

export default LandingPage
