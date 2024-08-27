import {useEffect, useState} from "react";
import  axios from "axios";

const useFetchBooks = () => {
    const books = [
        {
            id: "1",
            title: "THE HOUSEMAID IS WATCHING",
            author: "MCFADDEN, FREIDA",
            price: 45

        },
        {
            id: "2",
            title: "ERUPTION",
            author: "CRICHTON, MICHAEL",
            price: 50

        },
        {
            id: "3",
            title: "SWAN SONG",
            author: "HILDERBRAND, ELIN",
            price: 38
        },
        {
            id: "4",
            title: "DAD, I WANT TO HEAR YOUR STORY",
            author: "MASON, JEFFREY",
            price: 42

        },
        {
            id: "5",
            title: "THE WOMEN",
            author: "HANNAH, KRISTIN",
            price: 65

        },
        {
            id: "6",
            title: "THE HOUSEMAID",
            author: "MCFADDEN, FREIDA",
            price: 65

        },
        {
            id: "7",
            title: "A COURT OF THORNS AND ROSES",
            author: "MAAS, SARAH J.",
            price: 65

        },
        {
            id: "8",
            title: "CAMINO GHOSTS",
            author: "GRISHAM, JOHN",
            price: 65

        },
        {
            id: "9",
            title: "RECKIESS THE POWERIESS TRILOGY",
            author: "NADIR, AL M.",
            price: 65

        },
        {
            id: "10",
            title: "DOG MAN: THE SCARLET SHEDDER",
            author: "PILKEY, DAV",
            price: 65

        }
    ]
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const url = 'http://localhost:8083/api/book/getAll';
    useEffect(() => {
        setLoading(false);
        setError(false);

        axios.get(url)
            .then(({data}) => {
                console.log("okaaaay",data);
                setData(data);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [url]);

    return {
        data:books,
        loading ,
        error:false
    };
};

export default useFetchBooks;
