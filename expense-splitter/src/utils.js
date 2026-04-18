export const calculateBalances = (expenses, members) => {
  let balances = {}

  members.forEach(m => (balances[m] = 0))

  expenses.forEach(exp => {
    const share = exp.amount / exp.participants.length

    exp.participants.forEach(p => {
      balances[p] -= share
    })

    balances[exp.paidBy] += exp.amount
  })

  return balances
}

export const simplifyDebts = (balances) => {
  let creditors = []
  let debtors = []

  Object.entries(balances).forEach(([name, amount]) => {
    if (amount > 0) creditors.push({ name, amount })
    else if (amount < 0) debtors.push({ name, amount })
  })

  let settlements = []

  while (creditors.length && debtors.length) {
    let c = creditors[0]
    let d = debtors[0]

    let amount = Math.min(c.amount, -d.amount)

    settlements.push(`${d.name} pays ${c.name} ₹${amount.toFixed(2)}`)

    c.amount -= amount
    d.amount += amount

    if (c.amount === 0) creditors.shift()
    if (d.amount === 0) debtors.shift()
  }

  return settlements
}