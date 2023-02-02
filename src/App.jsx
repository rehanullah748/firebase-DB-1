import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import UsersContextProvider from "./Store/UsersContext"

function App() {


  return (
    <UsersContextProvider>
       <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>

    </Routes>
    </BrowserRouter>
    </UsersContextProvider>
   
   
  )
}

export default App
