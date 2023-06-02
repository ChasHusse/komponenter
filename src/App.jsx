import MainButton from "./components/MainButton"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar
        firstLink="Home"
        secondLink="About"
        thirdLink="Portfolio"
        fourthLink="Contact" />

      <MainButton title="BUTTON" />
      <MainButton
        title="NEW BUTTON"
        color="red" />
    </>
  )


}

export default App
