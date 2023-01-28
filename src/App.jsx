import 'normalize.css';
import './App.css'
import AboutCompany from './components/About/AboutCompany'
import Drawer from './components/Drawer/Drawer'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import HowWeHelp from './components/HowWeHelp/HowWeHelp'
import Landing from './components/Landing/Landing'
import ReadyToTalk from './components/ReadyToTalk/ReadyToTalk';
import WhatWeAdvise from './components/WhatWeAdvise/WhatWeAdvise';
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import { ScrollContextProvider } from './Contexts/ScrollContext'

function App() {

  return (
    <>
      <ScrollContextProvider>
        <Drawer />
        <Header />
        <Landing />
        <Features />
        <AboutCompany />
        <HowWeHelp />
        <WhatWeDo />
        <WhatWeAdvise />
        <ReadyToTalk />
        <Footer />
      </ScrollContextProvider>
    </>
  )
}

export default App
