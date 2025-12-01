import './scss/app.scss';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import NewRecipes from './sections/NewRecipes/NewRecipes';

function App() {

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <NewRecipes />
      </main>
    </>
  )
}

export default App
