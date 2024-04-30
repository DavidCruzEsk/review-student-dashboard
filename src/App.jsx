import CohortList from "./components/cohortlist/CohortList"
import Navbar from "./components/navbar/NavBar"
import StudentList from "./components/studentlist/StudentList"
import './styles/app.scss'

function App() {

  return (
    <div className="container">
      <Navbar/>
      <div className="container__splitter">
        <CohortList/>
        <StudentList/>
      </div>
    </div>
  )
}

export default App
