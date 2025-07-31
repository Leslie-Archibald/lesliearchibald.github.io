// import statements - react  components
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import statements, webpage files
import Layout from "./pages/layout.tsx"
import Index from "./pages/index.tsx";
// import statements, css files"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/index.tsx" element={<Index />}>Home</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
