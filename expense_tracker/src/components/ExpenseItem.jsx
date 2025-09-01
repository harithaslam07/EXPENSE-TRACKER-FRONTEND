const ExpenseItem = (props) => {
    const { item, deleteExpense ,editExpense} = props
    const { title, amount, _id } = item
    const type = amount < 0 ? "negative" : "positive"
    const handledelete = () => {
        deleteExpense(_id)

    }
    const handleedit=()=>{
   
        
        editExpense(item)
    }
    return (
        <div className={`expense-item ${type}`}>
            <span className="title">{title}</span>
            <span className="amount">${amount}</span>
            <div className="btn-container">
                <button className="delete-btn" onClick={handledelete}>Delete</button>
                <button className="edit-btn" onClick={handleedit}>Edit</button>
            </div>
        </div>
    )
}
export default ExpenseItem;