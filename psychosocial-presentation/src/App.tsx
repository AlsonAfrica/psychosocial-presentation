import './App.css'
// import HeroSection from './Components/heroSection'
import { HeroSection } from './Components/heroSection'
import { StickyNavbar } from './Components/navbar'
import { ContentSection } from './Components/resourcesReflection'
import { StoriesInterventionsSection } from './Components/storiesIntervention'
// import ResourcesReflection from './Components/resourcesReflection'
import { FooterWithReferences } from './Components/footer'
import { KeyTermsSection } from './Components/key'
import { ResourcesReflectionSection } from './Components/resourceReflection'

function App() {

  return (
    <>
      {/* <HeroSection /> */}
     <HeroSection />
      <section id="section1">
        <StickyNavbar />
      </section>

      <section id="section">
       <ContentSection/>
      </section>
     
      <section id="section2">
        <KeyTermsSection />
      </section>

      <section id="section4">
        <StoriesInterventionsSection/>
      </section>

      <section id="section5">
        <ResourcesReflectionSection/>
      </section>
      
      <section id="section3">
        <FooterWithReferences/>
      </section>
     
    </>
  )
}

export default App
