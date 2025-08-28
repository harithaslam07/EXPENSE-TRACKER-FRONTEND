import { useEffect, useState } from "react";

const BalanceContainer = (props) => {
    const { transactions } = props
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [balance, setbalance] = useState(0)
    useEffect(() => {
        let exp = 0
        let inc = 0
        transactions.forEach((tnx) => {
            if (tnx.amount < 0) {
                exp = exp - Number(tnx.amount)
            } else {
                inc = inc + Number(tnx.amount)
            }

        })
        setIncome(inc)
        setExpense(exp)
        setbalance(inc - exp)
    }, [transactions])
    return (
        <div className="balance-container">
            <div className="currency-item">
                <div className="title">Income</div>
                <div className="amount green">${income}</div>
            </div>
            <div className="currency-item">
                <div className="title">Expense</div>
                <div className="amount red">${expense}</div>
            </div>
            <div className="currency-item">
                <div className="title">Balance</div>
                <div className="amount">${balance}</div>
            </div>
        </div>
    )
}
export default BalanceContainer;