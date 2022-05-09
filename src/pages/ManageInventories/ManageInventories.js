import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useItems from '../../hooks/useItems';
import PageTitle from '../shared/PageTitle/PageTitle';

const ManageInventories = () => {
    const [items,setItems] = useItems();
    const handleDelete = (id)=>{
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            console.log("clicked", id);
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
        }
    }
    let count = 1;
    return (
        <section>
            <PageTitle title={'Manage Inventories'}></PageTitle>
            <div className='py-36'>
                <h3 className="leading-tight text-3xl font-bold text-dark-blue">  Manage Inventories</h3>

                <div className="flex flex-col">
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
                                        {
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
                                                    <td className="text-lg font-medium px-6 py-4 whitespace-nowrap border-r text-red">
                                                        <button type='' onClick={()=>{handleDelete(item._id)}}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageInventories;