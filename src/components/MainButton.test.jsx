import { render, screen } from '@testing-library/react';

import MainButton from "./MainButton"

describe('MainButton', () => {
    it('render button title', () => {
        render(<MainButton title="WORKING" />);

        screen.debug();

    });
});
