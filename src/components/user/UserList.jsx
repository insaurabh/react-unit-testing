const UserList = ({ userList }) => {
    console.log('users list', JSON.stringify(userList))
    const renderedUsers = userList.map((user, i) => {
        return (
            <tr key={`${user.name}-${i}`}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody data-testid="users">{renderedUsers}</tbody>
        </table>
    )
}

export default UserList;