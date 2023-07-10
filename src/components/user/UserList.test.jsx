import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', async () => {
    // render the component

    const users = [
        { name: 'jane', email: 'jane@gmail.com' },
        { name: 'sam', email: 'sam@gmail.com' },
    ]

   const { container } =  render(<UserList userList={users} />);

    // screen.logTestingPlaygroundURL();
    // const rows = screen.getAllByRole('row');

    // in this approach we are modifying the component
    // const rows = within(screen.getByTestId('users')).getAllByRole('row');
    // console.log(rows)

    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(2);

})