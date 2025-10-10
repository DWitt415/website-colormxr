import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './pages/Home.jsx'
import App from './pages/App.jsx'
import Courses from './pages/Courses.jsx'
import Gallery from './pages/Gallery.jsx'
import Alchemy from './pages/Alchemy.jsx'
import Neuroarts from './pages/Neuroarts.jsx'
import Journey from './pages/Journey.jsx'
import Join from './pages/Join.jsx'
import './index.css'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/alchemy" element={<Alchemy />} />
          <Route path="/neuroarts" element={<Neuroarts />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
