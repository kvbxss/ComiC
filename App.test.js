import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('renders a child component', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children).toContainEqual(expect.objectContaining({ type: 'View' }));
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});