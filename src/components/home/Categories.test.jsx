import React from 'react';
import Categories from './Categories';
import { render } from '@testing-library/react';

it('renders correctly when there are no items', async () => {
	const { findAllByAltText } = render(<Categories />);
	const items = await findAllByAltText('image');
	expect(items).toMatchSnapshot();
});
