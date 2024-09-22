import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostProfile from './postProfile/PostProfile';
import ShowProfile from './postProfile/ShowProfile';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<PostProfile />} />
        <Route path='/showProfile' element={<ShowProfile />} />
      </Routes>
    </Router>

     </>
  )
}

export default App;
