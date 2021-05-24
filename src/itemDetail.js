import React, {useState, useEffect} from 'react';

//When we link pages with the Link module of react-router-dom then
//we have access to some details of that link as a props
function ItemDetail({ match }) {
    //Let's get the data when our component mounts
    useEffect( () => {
        fetchItem();
        console.log(match);
    }, []); 

    const [item, setItem] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await data.json();
        console.log(item);

        setItem(item);
    }
    return(
        <div>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <h4>{item.price}</h4>
        </div>
    );
}

export default ItemDetail;