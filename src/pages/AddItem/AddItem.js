import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../shared/PageTitle/PageTitle';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplierName = event.target.supplier_name.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const photoUrl = event.target.url.value;
        const description = event.target.description.value;
        const email = user.email;
        const item = {
            name: name,
            supplier_name: supplierName,
            quantity: quantity,
            price: price,
            image: photoUrl,
            description: description,
            email: email
        }
        fetch('https://calm-reef-60814.herokuapp.com/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                if (data.insertedId) {
                    toast.success(`New Item Added Successfully`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    event.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <section className='pt-36 pb-28'>
            <PageTitle title={'Add New Item'}></PageTitle>
            <h3 className="leading-tight text-2xl font-bold text-dark-blue pb-5">  Add New  Item</h3>
            <form action="" onSubmit={handleAddItem}>
                <div className="grid grid-cols-1 justify-items-center mx-auto gap-2">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
                        <div className="form-floating m-3 xl:w-96">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="name" required />
                            <label htmlFor="name" className="text-gray-700">Item Name</label>
                        </div>
                        <div className="form-floating m-3 xl:w-96">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="supplier_name" placeholder="name" required />
                            <label htmlFor="supplier_name" className="text-gray-700">Supplier Name</label>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div className="form-floating m-3 xl:w-96">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="quantity" placeholder="quantity" required />
                            <label htmlFor="quantity" className="text-gray-700"> Quantity</label>
                        </div>
                        <div className="form-floating m-3 xl:w-96">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="price" placeholder="price" required />
                            <label htmlFor="price" className="text-gray-700">Price</label>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div className="form-floating m-3 xl:w-96">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="url" placeholder="url" required />
                            <label htmlFor="url" className="text-gray-700">Item Photo Url</label>
                        </div>
                        <div className="form-floating m-3 xl:w-96">
                            <textarea type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="description" placeholder="description" required />
                            <label htmlFor="description" className="text-gray-700">Description</label>
                        </div>
                    </div>
                    <button type="submit" data-mdb-ripple="true"
                        data-mdb-ripple-color="light" className=" inline-block px-6 py-2.5 bg-pastel-green text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-pastel-green-dark hover:shadow-lg focus:bg-pastel-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pastel-green-darker  active:shadow-lg transition duration-150 ease-in-out">Add Item&nbsp; <FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon> </button>
                </div>
            </form>
        </section>
    );
};

export default AddItem;