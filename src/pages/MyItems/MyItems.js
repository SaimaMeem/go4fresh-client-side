import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal/Modal';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PageTitle from '../shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const navigate = useNavigate();
    const navigateToUpdateStock = (id) => {
        navigate(`/fruits&vegetables/${id}`)
    }
    useEffect(() => {
        fetch(`https://go4fresh.onrender.com/myitems?email=${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setItems(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [items, email]);
    let count = 1;
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const displayModal = (id, name) => {
        setId(id);
        setName(name);

    }
    const submitDelete = (id, name) => {
        // console.log("clicked", id);

        toast.success(`${name} is deleted from the stock!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const url = `https://go4fresh.onrender.com/items/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log("deletion successful");
                    const rest = items.filter(item => item._id !== id);
                    setItems(rest);
                }
            })
    };
    return (
        <section>
            <PageTitle title={'My Items'}></PageTitle>
            <div className='pt-36 pb-24'>
                <h3 className="leading-tight text-3xl font-bold text-dark-blue">  My Items</h3>

                <div className="flex flex-col mt-5">
                    <div className="overflow-x-auto sm:mx-6 lg:mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-dark-blue text-white font-semibold">
                                        <tr className='border'>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                SI No.
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Fruit/ Vegetable
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Price
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Quantity
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Supplier Name
                                            </th>
                                            <th scope="col" className="text-sm py-4 border-r">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.length ?

                                            items.map(item =>
                                                <tr key={item._id} className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100 border">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">{count++}</td>
                                                    <td className="text-sm font-medium px-3 py-4 whitespace-nowrap border-r flex items-center justify-center gap-2 cursor-pointer" type='button' onClick={() => { navigateToUpdateStock(item._id) }}>
                                                        <img className="rounded-lg h-12 w-12 object-cover hidden md:block" src={item.image} alt="" />  {item.name}
                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        ${item.price}
                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {item.quantity}
                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {item.supplier_name}
                                                    </td>
                                                    <td className="text-lg font-medium px-6 py-4 whitespace-nowrap border-r text-redd">
                                                        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" type='' onClick={() => { displayModal(item._id, item.name) }} ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                                    </td>

                                                </tr>
                                            ) : <tr>
                                                <td colSpan="6" className='py-5 font-bold' >No Items Available</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal id={id} name={name} confirmModal={submitDelete} />
        </section>
    );
};

export default MyItems;