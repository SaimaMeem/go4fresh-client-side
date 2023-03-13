import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import useItems from '../../../hooks/useItems';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../../shared/Loader/Loader';
const Items = () => {
    const [items] = useItems();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1800);
    }, []);
    return (
        <section className='my-14' id='fruits&vegetables'>
            <h3 className="leading-tight text-3xl font-bold my-5 text-dark-blue">Fruits & Vegetables</h3>
            {loading ? <Loader /> :
                items.length ?
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                            }
                        </div>
                        <div className='my-5'>
                            <Link to='/manageinventories' type="button" data-mdb-ripple="true"
                                data-mdb-ripple-color="light" className=" inline-block px-10 py-4 bg-lavender-dark text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-lavender-darker hover:shadow-lg focus:bg-lavender-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lavender-darkest active:shadow-lg transition duration-150 ease-in-out">Manage Inventories&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon></Link>
                        </div>
                    </> : <div className='text-center font-bold pt-4'>No Fruits or Vegetables are available at this moment. Please try again later.</div>
            }
        </section>
    );
};

export default Items;