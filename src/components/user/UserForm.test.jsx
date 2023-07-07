import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
const jest = require('jest-mock');

describe("It should show two input fields", () => {
  it("should have two input fields", async() => {
    // rendering in jsdom
    render(<UserForm />);

    // these are query functions
    // there are approx 45 query functions available
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it("It calls onUserAdd when form is submitted", async () => {
    // const argsList = [];
    // const callBack = (...args) => {
    //   argsList.push(args)
    // }

    const mock = jest.fn();

    render(<UserForm onUserAdded={mock} />);

    // const [nameInput, emailInput] = screen.getAllByRole("textbox");
    const nameInput = screen.getByRole('textbox', {
      name: /name/i
    });

    const emailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    await user.click(nameInput)
    await user.keyboard('saurabh')

    await user.click(emailInput);
    await user.keyboard('saurabh@gmail.com')

    const button = screen.getByRole('button');

    await user.click(button);

    // expect(argsList).toHaveLength(1);

    // expect(argsList[0][0]).toEqual({ userName: 'saurabh', email: 'saurabh@gmail.com' });

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ userName: 'saurabh', email: 'saurabh@gmail.com' });
  })

});
