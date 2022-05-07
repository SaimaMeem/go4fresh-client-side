import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
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
        </section>
    );
};

export default Items;