import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Form, Button } from 'react-bootstrap';


const EmployeeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const employeeForm = async () => {
        const data = { firstName: firstName, lastName: lastName, email: email, password: password };
        const response = await fetch('http://[::1]:3000/employees', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await employeeForm();
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Employee Form</h1>
             <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password</label>
                <input type="tel" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Submit</button>
            </form>

        </div>
    );
};


export default EmployeeForm;
