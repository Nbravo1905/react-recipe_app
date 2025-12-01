import './scss/app.scss';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import NewRecipes from './sections/NewRecipes/NewRecipes';
import Footer from './sections/Footer/Footer';

function App() {

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <NewRecipes />
      </main>
      <Footer />
    </>
  )
}

export default App
