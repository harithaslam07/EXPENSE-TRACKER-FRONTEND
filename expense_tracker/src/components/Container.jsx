import { useEffect, useState } from "react";
import History from "./History";
import ExpenseForm from "./ExpenseForm";
import { toast } from "react-toastify";
import BalanceContainer from "./BalanceContainer";
const INITIAL_EXPENSE = []
const Container = () => {
    const [transactions, settransactions] = useState(INITIAL_EXPENSE)
    const [edititem, setEdititem] = useState(null)
    const addExpense = async (title, amount) => {
        await fetch("http://localhost:4000/insert",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ title, amount })
            }
        )
        getExpense()
    }

    useEffect(() => {
        getExpense()
    }, [])

    const getExpense = async () => {
        const res = await fetch("http://localhost:4000/getdata", {
            method: 'GET'
        })
        const data = await res.json()
        settransactions(data)

    }
    const deleteExpense = async (_id) => {
        await fetch("http://localhost:4000/deletedata",
            {
                method: "DELETE",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ _id })
            }
        )
        getExpense()
    }
    const editExpense = (item) => {
        setEdititem(item)

    }
    const updateExpense = async (_id, title, amount) => {
        await fetch("http://localhost:4000/editdata",
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ _id, title, amount })
            }
        )
        getExpense()
    }


    return (
        <>
            <div className="container">
                <h2>Expense Tracker</h2>
                <BalanceContainer transactions={transactions} />
                <History transactions={transactions} deleteExpense={deleteExpense} editExpense={editExpense} />
                <ExpenseForm addExpense={addExpense} edititem={edititem} setEdititem={setEdititem} updateExpense={updateExpense} />
            </div>
        </>
    )

}
export default Container;