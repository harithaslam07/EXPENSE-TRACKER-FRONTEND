import { useState } from "react";
import History from "./History";
import ExpenseForm from "./ExpenseForm";
import { toast } from "react-toastify";
import BalanceContainer from "./BalanceContainer";
const INITIAL_EXPENSE = []
const Container = () => {
    const [transactions, settransactions] = useState(INITIAL_EXPENSE)
    const [edititem,setEdititem]=useState(null)
    const addExpense = (title, amount) => {
        settransactions([
            ...transactions,
            {
                id: transactions.length + 1, title: title, amount: amount
            }
        ])

    }
    const deleteExpense = (id) => {
        let s = transactions.filter((txn) => {
            return txn.id != id;
        })
        settransactions(s)
        toast.success("Deleted Successfully")
    }
    const editExpense=(item)=>{
          setEdititem(item)
        
    }
    const updateExpense=(id,title,amount)=>{
        let s=transactions.map((txn)=>{
            if(txn.id===id){
                return {
                    id:id,
                    title:title,
                    amount:amount
                }
            }
            return txn
        })
        settransactions(s)
    }
      console.log(edititem )
    return (
        <>
            <div className="container">
                <h2>Expense Tracker</h2>
                <BalanceContainer transactions={transactions} />
                <History transactions={transactions} deleteExpense={deleteExpense} editExpense={editExpense} />
                <ExpenseForm addExpense={addExpense} edititem={edititem} setEdititem={setEdititem} updateExpense={updateExpense}/>
            </div>
        </>
    )

}
export default Container;