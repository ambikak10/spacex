import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import SingleProgram from './SingleProgram'
import { shallow} from "enzyme";
import '@testing-library/jest-dom/extend-expect';


Enzyme.configure({ adapter: new Adapter() });

describe("<SingleProgram /> component Unit Tests", () =>{
  const props = {
    img:"https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    name: 'FalconSat',
    missionid:null,
    launchyear: 2006,
    launch: false,
    land:null,
  };
  it("should render 1 <SingleProgram />", () => {
    const component = shallow(<SingleProgram {...props} />);
    expect(component).toHaveLength(1);
  })

    it("should render <SingleProgram />", () => {
    const component = shallow(<SingleProgram {...props} />);
    console.log(component.props());
    expect(props.name).toEqual('FalconSat')
  })

 it("should render <SingleProgram />", () => {
    const component = shallow(<SingleProgram {...props} />);
    console.log(component.props.name);
    expect(props.name).toEqual('FalconSat')
  })

   it("should render <SingleProgram />", () => {
    const component = shallow(<SingleProgram {...props} />);
    console.log(component.props.name);
    expect(props.launchyear).toEqual(2006)
  })
})