import React from 'react';
import renderer from 'react-test-renderer';
import ReadMore from './ReadMore';

const post = () => ({
  frontmatter: { date: new Date(99999) },
});

describe('ReadMore', () => {
  it('renders correctly', () => {
    const props = {
      nextPost: post(),
      prevPost: post(),
    };

    const tree = renderer.create(<ReadMore {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
