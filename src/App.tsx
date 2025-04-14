/* References >>>
  1) https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
*/

// Styles >>> 
import './App.scss'
// Assets >>>
// import Me from './assets/images/me_cartoon_edited_v5.png'
// Components >>>
import Home from "./components/Home/Home"
import About from "./components/About/About"
import NavDesktop from "./components/Nav/NavDesktop/NavDesktop"
// import NavDesktop from "./components/Nav/NavDesktop/NavDesktop"

function App() {
  return (
    <div id="App">
      <NavDesktop />
      <main>
        <Home />
        <About />
      </main>
    </div>
  )
}

export default App
