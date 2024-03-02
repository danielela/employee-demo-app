
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './componenent/Footer'
import HeaderComponent from './componenent/HeaderComponent'
import ListEmployeeComponent from './componenent/ListEmployeeComponent'
import CreateEmployee from './componenent/CreateEmployee'
import ErrorComponent from './componenent/ErrorComponent'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* comment line */}
          {/* //http://localhost:port/ */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          {/* http://localhost:port/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />} errorElement={<ErrorComponent/>} ></Route>
          {/* http://localhost:port/createEmployee */}
          <Route path='/createEmployee' element={<CreateEmployee/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
