
import { PortfolioProvider } from './contexts/PortfolioContext'
import { MainLayout } from './layouts/MainLayout'
import { Hero } from './features/Hero/Hero'
import { About } from './features/About/About'
import { Experience } from './features/Experience/Experience'
import { Skills } from './features/Skills/Skills'
import { Projects } from './features/Projects/Projects'
import LiveDemo from './features/LiveDemo/LiveDemo'
import { Contact } from './features/Contact/Contact'

function App() {
  return (
    // Inject PortfolioService via Context
    <PortfolioProvider>
      <MainLayout>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <LiveDemo />
        <Contact />
      </MainLayout>
    </PortfolioProvider>
  )
}

export default App
