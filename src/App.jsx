
import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./component/footer/footer"
import Home from "./component/home/home"
import About from "./component/about/About"
import Portfolio from "./component/portfolio/Portfolio"
import Contact from "./component/contact/contact"
import Layout from "./component/layout/layout"

function App() {
 

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="home" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="portfolio" element={<Portfolio />} />
       <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
