import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import CodeField from './Componants/CodeField/CodeField';
import Admin from './Pages/Dashboard/AdminDashboard/Admin';
import HR from './Pages/Dashboard/HRdashboard/HR';
import Individual from './Pages/Dashboard/Individualdashboard/individual';
import LogIn from './Pages/LogIn/LogIn';
import Payment from './Pages/Payment/Payment';
import Qustion from './Pages/Qustion/Qustion';
import Register from './Pages/Register/Register';
import ReportPage from './Pages/Report/Report';
import {BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom';
import ResetPassword from './Componants/ResetPassword/ResetPass';
import ResetPasswordForAdmin from './Componants/ResetPasswordForAdmin/ResetPassForAdmin';
import LogInForAdmin from './Pages/LogInForAdmin/LogInForAdmin';
import EditReportPage from './Componants/Dashboard/AdminDashboard/ListComponand/EditReportPage/EditReportPage';
import HrPayment from "./Componants/hrPayment/HrPayment"
import EditQustion from './Componants/Dashboard/AdminDashboard/ListComponand/EditQustion/EditQustion';
import AddQustion from './Componants/Dashboard/AdminDashboard/ListComponand/AddQustion/AddQustion';
export let TestContext = createContext(null);

// start Function From Qustion To Report
function getInitialStateFromQustion() {
  let loaclFromQus = window.localStorage.getItem('test');
  if (loaclFromQus !== 'undefined') {
    return loaclFromQus ? JSON.parse(loaclFromQus) : ""
  }
}
// End Function From Qustion To Report

// Start Function From Qustion To Report
function getInitialStateFromAdmin() {
  
  const localFromAdmin = localStorage.getItem('box')
  if (localFromAdmin !== 'undefined'){
    return localFromAdmin ? JSON.parse(localFromAdmin) : ""
  }
}
// End Function From Qustion To Report
function App() {

  // Start  From Qustion To Report
    let [test, settest] = useState(getInitialStateFromQustion);
  
    let testFun = () => {
      test ? settest(false): settest(true);
      console.log("done");
    }
  
      useEffect(() => {
        localStorage.setItem('test', JSON.stringify(test))
      }, [test])
    // End From Qustion To Report

    // start From Admin Dashbord To Report
    let [box, setbox] = useState(getInitialStateFromAdmin);
    let fromAdmicFun = () => {
      box ? setbox(false): setbox(true);
      console.log("done");
    }

    let [tiltemessage, settilteMessage] = useState('');
    let [StitcCon, setStitcCon] = useState('');
    let [Preef, setPreef] = useState('');
    
    let titleRef = useRef("")
    let StitcConRef = useRef("")
    let PreefRef = useRef("")

    const hundlerState = (event) => {
        let titlee = titleRef.current.value;
        let stitc = StitcConRef.current.value;
        let Pref = PreefRef.current.value;
        event.preventDefault();
        event.target.reset();
        settilteMessage(`The Title Is ${titlee}`);
        setStitcCon(`The stitc Is ${stitc}`);
        setPreef(`The Pref Is ${Pref}`);
    };

    useEffect(() => {
      localStorage.setItem('box', JSON.stringify(box))
    }, [box])

    // End From Admin Dashbord To Report
    const [pages, setPages] = useState([]);

    const createPage = (link, content) => {
      setPages([...pages, { link, content }]);
    };

  let usersValues = {test, settest, testFun, hundlerState , titleRef, StitcConRef, PreefRef, box, setbox, tiltemessage, StitcCon, Preef, fromAdmicFun}


  return (
    // <>
        <TestContext.Provider value={usersValues}>
    <div className="App">
    <Routes>
        <Route path='/' element={<Register />} /> 
        <Route path='/Payment' element={<Payment /> } />
        <Route path='/HRPayment' element={<HrPayment /> } />
        <Route path='/Login' element={<LogIn /> } />
        <Route path='/LogInForAdmin' element={<LogInForAdmin /> } />
        <Route path='/Qustion' element={<Qustion /> } />
        <Route path='/HR' element={<HR/> } />
        <Route path='/Individual' element={<Individual /> } />
        <Route path='/Admin' element={<Admin /> } />
        <Route path='/CodeField' element={<CodeField /> } />
        <Route className="PDF" id='PDF' path='/ReportPage' element={<ReportPage /> } />
        <Route path='/EditReportPage' element={<EditReportPage  /> } /> 
        <Route path='/EditQustion' element={<EditQustion  /> } /> 
        <Route path='/AddQustion' element={<AddQustion  /> } /> 
        <Route path='/Login/ResetPassword' element={<ResetPassword  /> } /> 
        <Route path='/LogInForAdmin/ResetPasswordForAdmin' element={<ResetPasswordForAdmin  /> } />
    </Routes>
    </div>
    </TestContext.Provider>
  );
}

export default App;


