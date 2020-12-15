import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';

configure({ adapter: new Adapter() });

const app = shallow(<App />, { disableLifecycleMethods: true });

it('initializes the `state` with an empty list of products', () => {
  expect(app.state().products).toEqual([]);
});

describe('<App />', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

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
});
