import React, { useState } from "react";
import "./add-form.css"
import { categories } from "../../constants/add-expense";
import { useDispatch } from 'react-redux'
import { addExpense } from "../../redux/actions/expenses";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from "./success-modal";


const AddForm = () => {
    const cat = categories;
    const  [categoryOpen,setCategoryOpen] = useState(false);
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState(0);
    const [category, setCategory] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleAmount = (e) => {
        const value = parseFloat(e.target.value);
        if(isNaN(value))
        {
            setAmount("");
            return
        }
        setAmount(value);
    }

    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }

    const handleSubmit = () => {
        if(title === "" || amount === "" || !category)
        {
            const notify = () => {
                toast("Please enter valid data")
                notify()
                return;
            }
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date()
        }
        dispatch(addExpense(data))
        setModalOpen(true)
    }

    return (
        <div className="add-form">
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <SuccessModal modalOpen = {modalOpen} setModalOpen = {setModalOpen}/>
            <div className="form-item">
                <label>Title</label>
                <input placeholder="Give a name to your expenditure" value = {title}
                onChange={(e) => handleTitle(e)}></input>
            </div>
            <div className="form-item">
                <label>Amount Rs.</label>
                <input className = 'amount-input' value = {amount} placeholder="Enter Amount" onChange={(e) => handleAmount(e)}></input> 
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={() => {setCategoryOpen(!categoryOpen)}}>
                        <label>{category ? category.title : 'Category'}</label>
                        <i class="fi fi-ts-angle-down"></i>
                    </div>
                    {categoryOpen&&<div className="category-container">
                    {cat.map(category => {
                    return (
                            <div className="category-item" style={{ borderRight: `5px solid ${category.color}` }} key={category.id} 
                            onClick={() => handleCategory(category)}>
                                <label>{category.title}</label>
                                <img src={category.icon} alt={category.title}></img>
                            </div>
                            );
                        })}
                    </div>}
                </div>
                <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i class="fi fi-rr-add"></i>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddForm;