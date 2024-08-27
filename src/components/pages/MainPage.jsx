import React, {createContext, useContext, useReducer, useState} from "react";
import {AppLayout, Footer, Page} from "../items/Layouts";
import BookList from "../templates/BookList";
import Header from "../templates/Header";
import ModalCard from "../templates/ModalCard";

const CartContext = createContext();

//Add a custom hook to simplify access to CartContext
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used with using the context CartContext");
    }
    return context;
};


const itemsReducer = (
    items,
    {type, payload: {id, title, author, price}, newQuantity}

) => {
    const index = items.findIndex((item) => item.id === id);
    console.log("newQuantity",newQuantity);
    switch (type) {
        case "add":
            if (index !== -1) {
                return [
                    ...items.slice(0, index),
                    {...items[index], quantity: items[index].quantity + 1},
                    ...items.slice(index + 1)
                ];
            } else {
                return [...items, {id, title, author, price, quantity: 1}];
            }
        case "changeQuantity":
            return [
                ...items.slice(0, index),
                {...items[index], quantity: newQuantity},
                ...items.slice(index + 1)
            ];
        case "remove":
            if (index !== -1) {
                return [...items.slice(0, index), ...items.slice(index + 1)];
            }
            break;
        default:
            throw new Error();
    }
};

function MainPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [items, dispatch] = useReducer(itemsReducer, []);

    return (
        <CartContext.Provider value={{setIsOpen, items, dispatch}}>
            <AppLayout>
                <Header  useCart={useCart}/>
                {isOpen && <ModalCard CartContext={CartContext} useCart={useCart}/>}
                <Page title="Top Selling Books – 2024">
                    <BookList context={useCart}/>
                </Page>
                <Footer/>
            </AppLayout>
        </CartContext.Provider>
    );
}

export default MainPage;
