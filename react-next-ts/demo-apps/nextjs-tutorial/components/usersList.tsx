import { fetchUsers, User } from '../utils/actions'

export default async function UsersList() {
  const users = await fetchUsers()

  console.log({users})

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      {users && users.length > 0 && 
        <ul className="list-disc">
          {users.map((user: User) => (
            <li key={user.id} className='my-1 text-white'>{user.name}: {user.email}</li>
          ))}
        </ul>
      }
    </div>
  );
}