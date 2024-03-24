import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Create, Table, Update} from './routes'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
