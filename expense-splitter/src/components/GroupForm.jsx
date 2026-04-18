import { useState } from "react"

export default function GroupForm({ setMembers }) {
  const [input, setInput] = useState("")

  const handleAdd = () => {
    const list = input.split(",").map(m => m.trim())
    setMembers(list)
  }

  return (
    <div className="card">
      <h3>Add Members</h3>
      <input
        placeholder="Enter names comma separated"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}