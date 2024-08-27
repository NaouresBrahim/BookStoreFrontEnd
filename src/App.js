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
function App() {
  return (
      <>
      <AppLayout>
          <Header/>

          <Page title="Top Selling Books – 2024">
              here we will display the BookList
          </Page>
          <Footer/>
      </AppLayout>
      </>
  );
}

export default App;
