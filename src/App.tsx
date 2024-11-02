import './App.css'
import Navbar from "@/components/custom/navbar.tsx";
import Firstpage from "@/pages/firstpage.tsx";
import TwoPages from "@/pages/twopages.tsx";
import Thirdpages from "@/pages/thirdpages.tsx";
import Fourpages from "@/pages/fourpages.tsx";



function App() {

  return (
      <>
        <Navbar/>
        <Firstpage/>
          <TwoPages/>
          <Thirdpages/>
          <Fourpages/>
      </>

  )
}

export default App
