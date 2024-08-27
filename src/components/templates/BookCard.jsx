import {HeartOutlineIcon, ShoppingCartSolidIcon} from "../items/Icons";
import React from "react";

const BookCard = ({
                      Book: {id, title, author, price}, context
                  }) => {
    const {setIsOpen, dispatch} = context(); //useContext(CartContext);

    const addToCart = (e) => {
        dispatch({type: "add", payload: {id, title, author, price}});
        setIsOpen(true);
    };

    return (
        <div className="w-auto overflow-hidden rounded-lg shadow-md bg-gray-50">
            <div className="p-4 bg-gray-50">
                <div className="text-lg font-semibold leading-snug text-gray-800">
                    {title}
                </div>
                <div className="text-sm text-gray-500"> Author: {author}</div>
                <div className="flex items-center justify-between mt-5 text-gray-800">
                    <div className="text-base font-semibold"> {price} €</div>
                    <div className="flex items-center space-x-2">
                        <a href="" className="text-red-600 focus:outline-none">
                            {<HeartOutlineIcon className="w-6 h-6"/>}
                        </a>
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 text-sm bg-green-600 rounded-full shadow-md hover:bg-green-500 focus:outline-none focus:ring-green-400 focus:ring-1 text-gray-50"
                            onClick={addToCart}
                        >
                            {<ShoppingCartSolidIcon className="w-5 h-5"/>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookCard;