// import React from "react";
// import './expense-list.css';
// import Card from "./card";
// import { useSelector } from "react-redux";

// const ExpenseList = () => {
//     const {expenseList : list} = useSelector((state)=>state.expenses)
//     console.log(expenses)
//     return (
//         <div className="expense-list">
//         {list.length ? list.map(item => (
//             <Card item={item}/>
//         )) : <div>
//             <img src = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt = "Empty"></img>
//         </div>}
//     </div>
//     );
// }

// export default ExpenseList;


import React from "react";
import './expense-list.css';
import Card from "./card";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {
    // Corrected the variable name to match the property name in the state
    const { expenseList: list, query } = useSelector((state) => state.expenses);
    const filteredList = list.filter(item => item.title.includes(query))
    const notifySuccess = () => toast.success("Expense Deleted")

    return (
        <div className="expense-list">
        <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            {filteredList.length ? (
                filteredList.map((item) => (
                    <Card key={item.id} item={item} notifySuccess = {notifySuccess}/>
                ))
            ) : (
                <div className="empty-state">
                    <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Empty List"
                    className="empty-image"></img>
                    <label>Uh Oh! Your expense list is empty.</label>
                </div>
            )}
        </div>
    );
}

export default ExpenseList;
