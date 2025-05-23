import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'



function App() {
  return <main className='font-body overflow-x-hidden'> 
    <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHeroSection />
    <AboutMeMain />
    <HelperSection />
  
  </main>

}

export default App
