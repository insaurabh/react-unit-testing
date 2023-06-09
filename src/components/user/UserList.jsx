const UserList = ({users}) => {
    const renderedUsers = users.map((user, i) => {
        return (
            <tr key={`${user.userName}-${i}`}>
                <td>{user.userName}</td>
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
            <tbody>{renderedUsers}</tbody>
        </table>
    )
}

export default UserList;