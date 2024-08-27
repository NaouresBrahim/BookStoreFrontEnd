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
const Header = () => {

    return (
        <header className="flex items-center justify-between w-full h-16 px-6 shadow-lg bg-gradient-to-r from-gray-200">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-600">
                Book Store
            </h1>
            <div>
                <a href="#" >
                    <ShoppingCartSolidIcon className="w-5 h-5 text-gray-700 hover:text-gray-800"/>
                </a>
            </div>
        </header>
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
