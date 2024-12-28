import Card from "./Component/Card"
import ThemeContextProvider from "./Context/ThemeContextProvider"


function App() {
  

  return (
    <ThemeContextProvider>
      <Card />
    </ThemeContextProvider>
  )
}

export default App
