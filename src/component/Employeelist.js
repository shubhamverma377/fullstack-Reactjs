import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const EmployeeList = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await fetch('http://[::1]:3000/employees');
            if (!response.ok) {
                throw new Error('Request failed');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const columns = [
        {
            dataField: "id",
            text: "Product ID",
            sort: true
        },
        {
            dataField: "name",
            text: "Product Name",
            sort: true
        },
        {
            dataField: "price",
            text: "Product Price in $"
        }
    ];

    const handleDelete = (id) => {
        // Logic to delete the row with the given id from the data
        const updatedData = data.filter((row) => row.id !== id);
        setData(updatedData);
    };



    return (
        <div className="App">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>

                    {data.length > 0 ?
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Button variant="danger" onClick={() => handleDelete(item.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )) : ""}
                </tbody>
            </Table>
        </div>
    )

};




export default EmployeeList;
