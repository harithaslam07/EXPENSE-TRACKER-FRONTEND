import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const ExpenseForm = (props) => {
    const { addExpense,edititem,updateExpense,setEdititem} = props;
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const handletitle = (e) => {
        setTitle(e.target.value)
    }
    const handleamount = (e) => {
        setAmount(e.target.value)
    }
    useEffect(()=>{
           setTitle(edititem?.title || "")
           setAmount(edititem?.amount || "")
    },[edititem])
    const handlesubmit = (e) => {

        e.preventDefault()
        if (!title && !amount) {
            toast.warning("Title and Amount are  required")

        }
        else if (!amount) {
            toast.warning("Amount required")
        }
        else if (title && amount) {
            if(edititem){
                updateExpense(edititem.id,title,amount)
                setEdititem("")
                 toast.success(" Transaction Updated succesfully")
            }
            else{
            addExpense(title, amount)
            setEdititem("")
             toast.success(" Transaction added succesfully")
        }
           
        }
        else {
            toast.warning("title required")
        }
        setTitle("")
        setAmount("")
    }
    return (<div className="expense-form">
        <h4>{edititem ? "Edit": "Add"} Transaction</h4>
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={title} onChange={handletitle} />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" value={amount} onChange={handleamount} />
            </div>
            <button type="submit">{edititem ? "Edit": "Add"}  Transaction</button>
        </form>
    </div>)

}
export default ExpenseForm;