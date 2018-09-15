import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//to make the enzyme to use this enzyme reactor like below syntax..
//need to move this to central file, so that we don't need to write it every time
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('rendering the test using enzyme', () => {
  const wrapper = shallow(<App />);
  //below line is for debugging, u can easily find what is going on with that component.
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
});