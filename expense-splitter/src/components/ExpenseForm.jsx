import { useState } from "react"

export default function ExpenseForm({ members, setExpenses }) {
  const [amount, setAmount] = useState("")
  const [paidBy, setPaidBy] = useState("")

  const handleAdd = () => {
    if (!amount || !paidBy) return

    const newExpense = {
      id: Date.now(),
      amount: Number(amount),
      paidBy,
      participants: members
    }

    setExpenses(prev => [...prev, newExpense])
    setAmount("")
    setPaidBy("")
  }

  return (
    <div className="card">
      <h3>Add Expense</h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select value={paidBy} onChange={e => setPaidBy(e.target.value)}>
        <option value="">Select payer</option>
        {members.map(m => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <button onClick={handleAdd}>Add Expense</button>
    </div>
  )
}