import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import SingleProgram from './SingleProgram'
import { render, screen } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

describe("<SingleProgram /> component Unit Tests", () =>{
  const props = {
    img:"https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    name: FalconSat,
    missionid:null,
    launchyear: 2006,
    launch: false,
    land:null,
  };
  it("should render 1 <SingleProgram />", () => {
    const component = shallow(<SingleProgram {...props} />);
    // expect(component).toHaveLength(1);
    expect(component.find("h4").toHaveLength(1));
  })
})