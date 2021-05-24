import React, {useState, useEffect} from 'react';
//
import {Link} from 'react-router-dom';

function Shop() {
    //Let's get the data when our component mounts
    useEffect( () => {
        fetchItems();
    }, []); 

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
       const data = await fetch('https://fakestoreapi.com/products');
       const items = await data.json(); 

       setItems(items);
    }
    return(
        <div>
            <h1>We are now in the Shop component</h1>
            {items.map( (item) => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        {item.title}
                    </Link> 
                </h1>
            ))}
        </div>
    )
}

export default Shop;