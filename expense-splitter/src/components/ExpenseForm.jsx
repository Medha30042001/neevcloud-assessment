import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function ExpenseForm({ members, setExpenses }) {
  const [amount, setAmount] = useState("")
  const [paidBy, setPaidBy] = useState("")

  const handleAdd = () => {
    if (!amount || !paidBy) return

    const newExpense = {
      id: uuidv4(),
      amount: Number(amount),
      paidBy,
      participants: members
    }

    setExpenses(prev => [...prev, newExpense])
    setAmount("")
  }

  return (
    <div className="card">
      <h3>Add Expense</h3>

      <input
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select onChange={e => setPaidBy(e.target.value)}>
        <option>Select payer</option>
        {members.map(m => <option key={m}>{m}</option>)}
      </select>

      <button onClick={handleAdd}>Add Expense</button>
    </div>
  )
}