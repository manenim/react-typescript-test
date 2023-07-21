import { useState } from "react"

const GuestList: React.FC = () => {
    const [name, setName] = useState('')
    const [guest, setGuest] = useState<string[]>([])

    const addGuest = () => {
        setName('')
        setGuest([...guest, name])
    }

    return (
      <div>
            <h3>GuestList</h3>
            <ul>
                {guest.map((guest) => (
                    <li key = {guest}>
                        {guest}
                    </li>
                ))}
            </ul>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
            <button type="submit" onClick = {addGuest}>Add Guest</button>
      </div>
  )
}

export default GuestList