import Form from './components/Form'
import Home from './components/Home'
import Pagination from './components/Pagination'
import { data } from "./constants/constants"
import LifecycleLogger from "./components/LifecycleLogger"
import Theme from './components/Theme'
import EnhancedHOC from './components/HOC'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'


function App() {

  const pages = 5

  const active_page = 1

  return (
    <>
      {/* <Home data={data}/> */}

      {/* <Form/> */}


      {/* <Pagination pages={pages} active_page={active_page}/> */}

      {/* <LifecycleLogger/> */}


      {/* <Theme/> */}


      {/* <EnhancedHOC /> */}

      {/* <Counter/> */}

      <Counter2/>

    </>
  )
}



export default App
