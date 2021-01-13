import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Landing from './Landing'
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16"


Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();



const props = {};

describe('Landing Component', () => {
    it('should render correctly with default props and redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Landing {...props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should dispatch both', () => {
    const dispatch = jest.fn();
    store.dispatch = dispatch;

    const wrapper = shallow(
        <Provider store={store}>
            <Landing {...props} error={true} />
        </Provider>);
        expect(wrapper).toHaveLength(1);
    });
});