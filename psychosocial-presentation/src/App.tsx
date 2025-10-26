import './App.css'
import HeroSection from './Components/heroSection'
import Main from './Components/main'
import ResourcesReflection from './Components/resourcesReflection'
import FloatingLeavesFooter from './Components/footer'

function App() {

  return (
    <>
      <HeroSection />

      <section id="section1">
       <HeroSection />
      </section>

      <section id="section">
       <Main />
      </section>
     
      <section id="section2">
        <ResourcesReflection/>
      </section>
      
      <section id="section3">
        <FloatingLeavesFooter/>
      </section>
     
    </>
  )
}

export default App
