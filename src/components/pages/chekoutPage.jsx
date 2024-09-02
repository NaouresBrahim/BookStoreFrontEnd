import React, {useContext} from "react";

const CheckOutPage = ({CartContext, useCart}) => {
    const {setIsOpen, setIsCheckout, items} = useContext(CartContext);
    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
    };

    const closeCheckout = (e) => {
        e.preventDefault();
        setIsCheckout(false);
    };

    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h4>{item.title}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: {(item.quantity * item.price).toFixed(2)}</p>
                    </li>

                ))}
            </ul>

            <h3>Total Price: {getTotalPrice()}</h3>
            <button
                type="button"
                className="flex items-center justify-center w-full h-10 mt-4 space-x-2 text-sm bg-green-600 rounded-md shadow-md hover:bg-green-500 focus:outline-none text-gray-50"
                onClick={closeCheckout}>
                <span>Confirm Order</span>
            </button>
        </div>
    );
    // <a
    //     href="/public"
    //     className="flex-none text-gray-600 hover:text-gray-800"
    //     onClick={closeCheckout}
    // >


};
export default CheckOutPage;