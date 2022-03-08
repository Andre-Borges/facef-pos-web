import Logo from '.';
import React from 'react';
import { render } from '@testing-library/react';

test('render logotipo', () => {
  const logo = render(<Logo />);
  expect(logo.baseElement).toMatchSnapshot();
});
