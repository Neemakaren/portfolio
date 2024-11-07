import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import PageLoader from './components/PageLoader'
import { projects } from './utils/data'


import store from './store/store'
import { Provider } from 'react-redux';



function App() {
  const [showModal, setshowModal] = useState(false);
  const [modalData, setModalData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
      setIsLoading(false);
  }, 3000);


  return (
    <>
    {isLoading ? (
				<div>
					<PageLoader />
				</div>
			) : (
				<div>
					 <Home projects={projects}/>
				</div>
			)}
    </>
  )
}

export default App;