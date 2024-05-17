import { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex w-full">
                  <div className="w-1/5">
                    <Sidebar />
                  </div>
                  <div className="w-4/5">
                    <Products />
                  </div>
                </div>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
