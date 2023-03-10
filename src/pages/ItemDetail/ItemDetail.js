import { } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageTitle from '../shared/PageTitle/PageTitle';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [itemDetail, setItemDetail] = useState([]);
    useEffect(() => {
        fetch(`https://go4fresh.onrender.com/items/${itemId}`)
            .then(res => res.json())
            .then(data => setItemDetail(data));
    }, [itemDetail, itemId]);
    const { _id, name, price, image, description, supplier_name } = itemDetail;
    let { quantity } = itemDetail;

    const decreaseQuantity = (id) => {
        let newQuantity = parseInt(quantity) - 1;
        const newItem = { ...itemDetail, quantity: newQuantity.toString() }
        setItemDetail(newItem);
        console.log(typeof quantity);

        toast.success(`One ${name} is delivered!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        fetch(`https://go4fresh.onrender.com/items/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const addQuantity = (id) => {
        const added = document.getElementById('addQtyInput').value;
        document.getElementById('addQtyInput').value = '';
        let newQuantity = parseInt(quantity) + parseInt(added);
        console.log(id);
        console.log(newQuantity);
        const newItem = { ...itemDetail, quantity: newQuantity.toString() }
        setItemDetail(newItem);

        toast.success(`${added} ${name} is added to the stock!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        // console.log(typeof quantity);
        fetch(`https://go4fresh.onrender.com/items/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <section className='py-36 text-black'>
            <PageTitle title={`${name} Details`}></PageTitle>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row bg-white md:mx-16">
                    <img className="w-auto h-auto sm:h-72 sm:self-center md:w-72 lg:w-auto object-cover rounded-lg md:rounded-none md:rounded-l-lg md:shadow-lg mx-auto" src={image} alt="" />
                    <div className="p-6 flex flex-col justify-start text-left">
                        <h5 className="text-3xl font-bold mb-2">{name}</h5>
                        <h5 className="text-2xl font-bold mb-2">Price:  <span className='text-xl font-semibold'>${price}</span> <span className='text-xs font-medium text-gray-800'>&nbsp; per piece</span></h5>
                        <h5 className="text-lg font-bold mb-2">Supplier:  <span className='text-base font-medium'>{supplier_name}</span></h5>
                        <p className="text-base font-medium mb-4">
                            {description}
                        </p>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <h5 className="text-lg font-bold mb-2">Quantity:  <span className='text-lg font-semibold'>{quantity}</span>
                                <button onClick={() => { decreaseQuantity(_id) }} type="button" data-mdb-ripple="true"
                                    data-mdb-ripple-color="light" className="mx-5 inline-block px-3 py-1.5 bg-orange-dark text-white font-bold text-xs leading-tight rounded shadow-md hover:bg-orange-darker hover:shadow-lg focus:bg-orange-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-darkest active:shadow-lg transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed" disabled={quantity === '0'} > Deliver &nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
                                {quantity === '0' && <p className='text-redd'>SOLD OUT</p>}
                            </h5>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item bg-white border border-gray-200 rounded-0 mt-5 sm:mt-0">
                                    <h2 className="accordion-header mb-0" id="headingOne">
                                        <button className="accordion-button relative flex items-center w-full py-3 px-5 text-base text-left bg-white text-black border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <span className='text-pastel-green-dark font-bold'>Restock Item</span></button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body py-4 px-5">
                                            <div className="flex justify-center">
                                                <div className="mb-3 xl:w-96 grid grid-cols-1 lg:grid-cols-2">
                                                    <input type="text" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="addQtyInput" placeholder="Enter Quantity" />
                                                    <button onClick={() => { addQuantity(_id) }} type="submit" data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light" className="ml-auto mt-4 lg:mt-0 inline-block px-8 py-1.5 bg-orange-dark text-white font-bold text-xs leading-tight rounded shadow-md hover:bg-orange-darker hover:shadow-lg focus:bg-orange-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-darkest active:shadow-lg transition duration-150 ease-in-out" > <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> &nbsp;Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <Link to='/manageinventories' type="button" data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className=" inline-block px-10 py-4 bg-lavender-dark text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-lavender-darker hover:shadow-lg focus:bg-lavender-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lavender-darkest active:shadow-lg transition duration-150 ease-in-out">Manage Inventories&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon></Link>
            </div>
        </section>
    );
};

export default ItemDetail;