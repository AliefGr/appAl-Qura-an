
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DetailSurahPage from './pages/DetailSurahPage'

function App() {

  return (
    <div className='mx-auto max-w-[600px]'>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/surah/:surahId' element={<DetailSurahPage/>}/>
        </Routes>
    </div>
  )
}

export default App
