import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/app' element={<App/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


