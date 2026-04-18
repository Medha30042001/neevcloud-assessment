import { calculateBalances, simplifyDebts } from "../utils"

export default function Summary({ expenses, members }) {
  const balances = calculateBalances(expenses, members)
  const settlements = simplifyDebts(balances)

  return (
    <div className="card">
      <h3>Balances</h3>

      {Object.entries(balances).map(([name, amount]) => (
        <p key={name}>
          {name}: ₹{amount.toFixed(2)}
        </p>
      ))}

      <h3>Settlements</h3>

      {settlements.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </div>
  )
}