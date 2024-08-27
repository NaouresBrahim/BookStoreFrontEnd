import {ShoppingCartSolidIcon} from "../items/Icons";
import React from "react";

const Header = ({useCart}) => {
    const {setIsOpen} = useCart(); // useContext(CartContext);

    const openCart = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    return (
        <header className="flex items-center justify-between w-full h-16 px-6 shadow-lg bg-gradient-to-r from-gray-200">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-600">
                Book Store
            </h1>
            <div>
                <a href="#" onClick={openCart}>
                    <ShoppingCartSolidIcon className="w-5 h-5 text-green-700 hover:text-gray-800"/>
                </a>
            </div>
        </header>
    );
};
export  default  Header;