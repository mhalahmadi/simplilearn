//import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'


Enzyme.configure({adapter:new Adapter()})
describe("Opreation Testing", ()=>{


  it("Inut testing", ()=>{
    let warpper = shallow(<App/>)
    let text =  warpper.find("input").text();
    expect("").toBe(text);
  })

  it("State veribale testing", ()=>{
    let warpper = shallow(<App/>)
    let ref =  warpper.instance();
    expect("").toBe(ref.state.resulte);
  })

});
