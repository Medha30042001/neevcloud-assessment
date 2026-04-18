import { useState } from "react"
import GroupForm from "./components/GroupForm"
import ExpenseForm from "./components/ExpenseForm"
import Summary from "./components/Summary"

function App() {
  const [members, setMembers] = useState([])
  const [expenses, setExpenses] = useState([])

  return (
    <div className="container">
      <h1>Smart Expense Splitter</h1>

      <GroupForm setMembers={setMembers} />

      {members.length > 0 && (
        <>
          <ExpenseForm members={members} setExpenses={setExpenses} />
          <Summary expenses={expenses} members={members} />
        </>
      )}
    </div>
  )
}

export default App