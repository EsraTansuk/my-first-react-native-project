import * as React from 'react';
import renderer from 'react-test-renderer';

import { ThemedText } from '../ThemedText';

it(`renders correctly, default`, () => {
  const tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>).toJSON();
  expect(tree).toMatchSnapshot();
}
);