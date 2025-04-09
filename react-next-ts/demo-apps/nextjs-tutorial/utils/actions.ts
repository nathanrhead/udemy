'use server'

import { readFile, writeFile } from 'fs/promises'
import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'

export type User = {
  id: string
  name: string
  email: string
}

export const createUser = async (formData: FormData) => {
  'use server'

  // const rawData = Object.fromEntries(formData) // Method for accessing all the form's data.
  const name = formData.get('name') as string // Method for accesssing a single field's data by its name.
  const email = formData.get('email') as string // Method for accesssing a single field's data by its name.
  const id = crypto.randomUUID() // Method for generating a unique ID.
  const newUser: User = { id, name, email };

  await saveUser(newUser)

  // To see the changes in the UI, either the path needs to be revalidated or the page needs to be redirected.
  revalidatePath('/actions') // Method for revalidating the path to ensure the data is up-to-date.
  // redirect('/actions'); // Do not use in a try-catch block.
}

export const fetchUsers = async (): Promise<User[]> => {
  'use server'
  const result = await readFile('users.json', 'utf-8')
  const users = result ? JSON.parse(result) : []
  return users
}

const saveUser = async (user: User) => {
  const users = await fetchUsers()
  const emailExists = users.some((u: User) => u.email === user.email)

  if (!emailExists) {
    users.push(user)
    await writeFile('users.json', JSON.stringify(users, null, 2), 'utf-8')
  }
}
