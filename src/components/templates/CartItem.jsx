import {TrashSolidIcon} from "../items/Icons";
import React, {useEffect, useState} from "react";

const CartItem = ({item: {id, title, author, price, quantity},useCart}) => {
    const {dispatch} = useCart();

    const removeFromCart = (e) => {
        e.preventDefault();
        dispatch({type: "remove", payload: {id}});
    };

    const changeQuantity= (e) => {
        dispatch({type: "changeQuantity", payload: {id, title, author, price}, newQuantity:e.target.value});
    };
    return (
        <div className="flex items-center">
            {/* <div className="flex justify-center p-4">
                <img className="w-24 h-auto" src={image} alt="Book"/>
            </div>*/}
            <div className="flex-auto space-y-2">
                <div className="text-base text-gray-800 sm:text-sm">{title}</div>
                <div>
                    <div className="text-sm text-gray-600 sm:text-xs">
                        Quantity: <input type="number"  value={quantity} onChange={e => changeQuantity(e)}   />
                    </div>
                    <div className="text-sm font-semibold text-green-700 sm:text-xs">
                        € {quantity * price}
                    </div>
                </div>
            </div>

            <div>
                <a
                    href="/public"
                    className="text-gray-600 hover:text-gray-800"
                    onClick={removeFromCart}
                >
                    {<TrashSolidIcon className="w-5 h-5"/>}
                </a>
            </div>
        </div>
    );
};

export default CartItem;