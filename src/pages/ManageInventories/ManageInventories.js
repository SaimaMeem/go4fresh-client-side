import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';
import Modal from '../Modal/Modal';
import PageTitle from '../shared/PageTitle/PageTitle';

const ManageInventories = () => {
    const [items,setItems] = useItems();
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);

    const displayModal = (id,name) => {
        setId(id);
        setName(name);

    }
    const submitDelete = (id,name) => {
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
        const url = `http://localhost:5000/items/${id}`;
        fetch(url, {
            method: "DELETE"
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

    let count = 1;
    return (
        <section>
            <PageTitle title={'Manage Inventories'}></PageTitle>
            <div className='pt-36 pb-24'>
                <h3 className="leading-tight text-3xl font-bold text-dark-blue">  Manage Inventories</h3>
                <div className='flex justify-end  sm:mx-6 lg:mx-8 sm:px-6 lg:px-8'>
                    <Link to='/additem' type="submit" data-mdb-ripple="true"
                        data-mdb-ripple-color="light" className="ml-auto mt-4 inline-block px-6 py-2.5 bg-orange-dark text-white font-bold text-sm leading-tight rounded shadow-md hover:bg-orange-darker hover:shadow-lg focus:bg-orange-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-darkest active:shadow-lg transition duration-150 ease-in-out" > <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> &nbsp;Add New</Link>
                </div>
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
                                {items.length !== 0 ?
                                    
                                            items.map(item =>
                                                <tr key={item._id} className="bg-white  transition duration-300 ease-in-out hover:bg-gray-100 border">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">{count++}</td>
                                                    <td className="text-sm font-medium px-3 py-4 whitespace-nowrap border-r flex items-center justify-center gap-2">
                                                        <img className="rounded-lg h-12 w-12 object-cover hidden md:block" src={item.image} alt="" />  {item.name}
                                                    </td>
                                                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap border-r">
                                                        {item.price}
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
                                            ):<tr>
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
            <Modal id={id} name={name}  confirmModal={submitDelete}  />
        </section>
    );
};

export default ManageInventories;