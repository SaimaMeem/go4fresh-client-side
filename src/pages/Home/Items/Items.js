import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);
    return (
        <section className='my-10'>
            <h3 className="leading-tight text-3xl font-bold my-5 text-dark-blue">Fruits and Vegtables</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    items.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <div className='my-5'>
                <button type="button" data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className=" inline-block px-10 py-4 bg-lavender-dark text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-lavender-darker hover:shadow-lg focus:bg-lavender-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lavender-darkest active:shadow-lg transition duration-150 ease-in-out">Manage Inventories</button>
            </div>
        </section>
    );
};

export default Items;