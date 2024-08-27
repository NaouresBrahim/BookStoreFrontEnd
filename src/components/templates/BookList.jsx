import {useFetchBooks} from "../../hooks";
import React from "react";
import BookSearch from "./BookSearch";
import BookCard from "./BookCard";

const BookList = ({context}) => {

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
                        <BookCard key={book.id} Book={book} context={context}/>
                    ))}
            </div>
        </>
    );
};

export default BookList;