import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  // beforeEach(() => {
  //   wrapper = shallow(<App />);
  // });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a classname navbar', () => {
    expect(wrapper.find('.navbar')).toBeDefined;
  });

  it('has an id of details', () => {
    expect(wrapper.find('#details').toBeDefined);
  });

  it('has a MainCarousel component', () => {
    expect(wrapper.find('MainCarousel')).toBeDefined;
  });

  // test('Should have a title', () => {
  //   expect(wrapper.find('#title').text()).toBe('maze merchantile');
  // });
});
