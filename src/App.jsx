import Home from "./Pages/Home";

import Loading from "./Components/Load-more/Loading"

import Tabs from "./Components/Tabs/Tabs"

import LightDark from "./Components/Theme/LightDark";

import Star from "./Components/Star-Rating/Star";

import Faq from "../src/Components/Accordion/Faq";
import Footer from "../src/Components/Accordion/Footer";

import Random from "./Components/Random-Color-generator/Random";


function App() {
  

  return (
    <>

    {/* MODAL CUSTOM */}
     <Home />


     {/* ACCORDION */}
     <Faq />
     <Footer />

     {/* RANDOM COLOR GENERATOR */}
      <Random />


      <Star />

      <LightDark />

      <Tabs />

      <Loading />
    </>
  )
}

export default App
