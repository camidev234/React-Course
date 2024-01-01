export const Users = () => {
    const users = [
        {
            id: 1,
            name: 'Camilo'
        },
        {
            id: 2,
            name: 'Daniel'
        },
        {
            id: 3,
            name: 'Jhan'
        }

    ]

    return (
        <div className="cont">
            {users.map(user => {
                return <h1 key={user.id}>{user.id}</h1>
            })}
        </div>
    )
}