import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import MealsPage from './MealsPage.jsx'
import AddMealPlan from './AddMealPlan.jsx'
import MainLayout from './MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App/>}/>
        <Route path="meals" element={<MainLayout/>}>
          <Route index element={<MealsPage/>}/>
          <Route path="add" element={<AddMealPlan/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
