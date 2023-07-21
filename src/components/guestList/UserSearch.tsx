import { useState } from "react"

const UserSearch = () => {
    const [name, setName] = useState('')

    const users = [
        {name: 'serah', age: 20},
        {name: 'jim', age: 20},
        {name: 'jane', age: 20},
    ]

    const searchUser = () => {

    }
  return (
      <div>
          <h3>User Search</h3>
          <input type="text" value = {name} onChange={e => setName(e.target.value)} />
          <button onClick = {searchUser}>search</button>
    </div>
  )
}

export default UserSearch