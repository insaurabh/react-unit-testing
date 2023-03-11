import { render, screen } from '@testing-library/react';
import  userEvent from '@testing-library/user-event';

import Register from './Register';

describe("Register component", () => {
    it("should render Register component", () => {
        render(<Register />);
        const element =  screen.getByRole('heading', {
            name: /Please enter your details below to register yourself\./
        })
        expect(element).toBeInTheDocument();
    });

    it("should show error message when all the fields are not filled", async () => {
        render(<Register />);
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        const alertElement = screen.getByRole('alert');
        expect(alertElement).toBeInTheDocument();
        screen.debug();
    })
})