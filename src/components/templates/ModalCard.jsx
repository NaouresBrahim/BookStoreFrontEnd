import React, {useContext} from "react";
import {XOutlineIcon} from "../items/Icons";
import CartItem from "./CartItem";

const ModalCard = ({CartContext,useCart}) => {
    const {setIsOpen,setIsCheckout, items} = useContext(CartContext);

    const closeCart = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const openCheckout = (e) => {
        e.preventDefault();
        setIsOpen(false);
        setIsCheckout(true);
    };

    return (
        <aside className="fixed inset-y-0 right-0 z-10 w-11/12 h-full sm:w-96">
            <div className="w-full h-full px-5 py-4 bg-white border-l-2 shadow-lg">
                <div className="flex justify-end">
                    <a
                        href="/public"
                        className="flex-none text-gray-600 hover:text-gray-800"
                        onClick={closeCart}
                    >
                        {<XOutlineIcon className="w-6 h-6"/>}
                    </a>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-none text-green-700">
                    Your Cart
                </h3>
                <div className="mt-4 divide-y-2">
                    {items && items.map((item) => <CartItem key={item.id} item={item} useCart={useCart}/>)}
                </div>
                {items && items.length > 0 ? (
                    <button
                        type="button"
                        className="flex items-center justify-center w-full h-10 mt-4 space-x-2 text-sm bg-green-600 rounded-md shadow-md hover:bg-green-500 focus:outline-none text-gray-50"
                        onClick={openCheckout}>
                        <span>Check out </span>
                    </button>
                ) : (
                    <p>Your cart is still empty for the moment</p>
                )}
            </div>
        </aside>
    );
};

export default ModalCard;