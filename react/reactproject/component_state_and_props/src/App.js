import './App.css';
import { MyButton, MyInputFaild } from './MyButtonComponent';
import EmployeeDetails from './EmployeeDetails';
import PersonalInfo from './PersonInfo'

function App() {
    return ( <
        div className = "App" >

        <
        h2 > React State and Props concept < /h2>  

        {
            /* <EmployeeDetails desg = "Developer"
                        city = "jeddah" > < /EmployeeDetails>  
                        Name: < MyInputFaild type = "text"
                        name = "uname" / > < br / >
                        Email: < MyInputFaild type = "email"
                        name = "emailID" / > < br / >
                        PhNumber: < MyInputFaild type = "number"
                        name = "phNumber" / > < br / >
                        <

                        MyButton type = "submit"
                        value = "Sign In" > < /MyButton> <
                        MyButton type = "reset"
                        value = "reset" > < /MyButton> <
                        MyButton type = "button"
               value = "Click Here" > < /MyButton>*/
        } <
        PersonalInfo > < /PersonalInfo>


        <
        /div>
    );
}

export default App;