import './App.css';
import {
    HeartSolidIcon,
    ShoppingCartSolidIcon,
    Footer,
    AppLayout,
    Page,
    SearchOutlineIcon,
    TrashSolidIcon,
    XOutlineIcon
} from "./components";

import {useFetchBooks} from "./hooks";
import {useState} from "react";

const Header = () => {
    //const {setIsOpen} = useCart(); // useContext(CartContext);

    const openCart = (e) => {
        e.preventDefault();
        //setIsOpen(true);
    };

    return (
        <header className="flex items-center justify-between w-full h-16 px-6 shadow-lg bg-gradient-to-r from-gray-200">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-600">
                Book Store
            </h1>
            <div>
                <a href="#" onClick={openCart}>
                    <ShoppingCartSolidIcon className="w-5 h-45 text-gray-700 hover:text-gray-800"/>
                </a>
            </div>
        </header>
    );
};
const BookSearch = ({setSearchText}) => {
    const [filter, setFilter] = useState("");

    const searchBook = (e) => {
        e.preventDefault();
        setSearchText(filter);
    };

    return (
        <form className="relative" onSubmit={searchBook}>
            <div className="absolute inset-y-0 flex items-center left-3">
                {<SearchOutlineIcon className="w-6 h-6 text-gray-600"/>}
            </div>
            <input
                type="text"
                className="w-full py-3 pl-12 pr-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-40"
                placeholder="Search the book..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </form>
    );
};
const BookList = () => {
    const {data: books, error} = useFetchBooks();

    return (
        <>
            <BookSearch/>

            <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                {error &&
                    <div className="col-span-12 p-6 text-red-500 rounded-lg shadow-md bg-gray-50">
                        Unable to load data. Ensure the API is up and configured to run on
                    </div>
                }
                {books &&
                    books.map((book) => (
                        <BookCard key={book.id} Book={book}/>
                    ))}
            </div>
        </>
    );
};
const BookCard = ({
                      Book: {id, title, author, price}
                  }) => {
    // const {setIsOpen, dispatch} = useCart(); //useContext(CartContext);

    // const addToCart = (e) => {
    //     dispatch({type: "add", payload: {id, title, author, price}});
    //     setIsOpen(true);
    // };

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
                            {<HeartSolidIcon className="w-6 h-6"/>}
                        </a>
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 text-sm bg-green-600 rounded-full shadow-md hover:bg-green-500 focus:outline-none focus:ring-green-400 focus:ring-1 text-gray-50"
                            //onClick={addToCart}
                        >
                            {<ShoppingCartSolidIcon className="w-5 h-5"/>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <>
            <AppLayout>
                <Header/>

                <Page title="Top Selling Books – 2024">
                    <BookList/>
                </Page>
                <Footer/>
            </AppLayout>

        </>
    )
        ;
}

export default App;
