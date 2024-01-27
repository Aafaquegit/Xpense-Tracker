import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import React from "react";
import AddExpense from "./pages/add-expense";
import Footer from "./components/footer";

function App() {
  return (
    // <BrowserRouter>
    //     <Header/>
    //     <switch>
    //       <Route path="/" exact component={Home}/>
    //     </switch>
    //     <div>Footer</div>
    // </BrowserRouter>   
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact Component={Home}>
        </Route>
        <Route path="/add-expense" Component={AddExpense}>
        </Route>
      </Routes>
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
