import { useState } from "react"

type Users = {
    name: string,
    age: number
}

const UserSearch = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()
    const [users, setUsers] = useState<Users[] | undefined>()

    const user1 = [
        {name: 'serah', age: 20},
        {name: 'jim', age: 20},
        {name: 'jane', age: 20},
    ]
    const user2 = [
        {name: 'jane', age: 20},
        {name: 'bing', age: 20},
        {name: 'classic', age: 20},
    ]

    const searchUser = () => {
        const foundUser = user1.find((user) => {
            return (
                user.name === name
            )
                
        })
        console.log(foundUser)
        setUser(foundUser)

        setUsers(user2)

    }
    console.log(users)
  return (
      <div>
          <h3>User Search</h3>
          <input type="text" value = {name} onChange={e => setName(e.target.value)} />
          <button onClick={searchUser}>search</button>
          
          <h2>{user ? user.name : 'user not found' }</h2>
    </div>
  )
}

export default UserSearch