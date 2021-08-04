import './App.css';
import EmployeeDetails from './EmployeeDetails';

function Header() {
    return ( <
        div >
        <
        h1 > this is header < /h1> < /
        div >
    );
}

let Info = () => < div > This is Arrow style componnent < /div>

let PersonDetails = () => {
    return ( <
        div >
        <
        h > This arrow style componnent with multip message < /h> <
        p > This is PersonDetails componnent < /p>         < /
        div >
    )
}

function FooterComponent() {
    return ( <
        div >
        <
        h3 > This is footer componnent < /h3> <
        p > Thos is foter < /p> < /
        div >
    );
}

function App() {
    return ( <
        div className = "App" >
        <
        Header > < /Header> <
        h2 > WELCOME TO REACT COURSE < /h2>  <
        EmployeeDetails > < /EmployeeDetails> <
        FooterComponent > < /FooterComponent>   <
        Info > < /Info> <
        PersonDetails > < /PersonDetails> </
        div >
    );
}

export default App;