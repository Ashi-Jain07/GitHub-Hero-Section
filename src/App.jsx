import CodePreviewSection from "./Components/CodePreviewSection"
import ContactSection from "./Components/ContactSection"
import FeaturesSection from "./Components/FeaturesSection"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import PricingSection from "./Components/PricingSection"

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <CodePreviewSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App;