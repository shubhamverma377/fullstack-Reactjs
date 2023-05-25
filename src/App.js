import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import EmployeeList from './component/Employeelist';
import EmployeeForm from './component/EmployeeForm';
import 'bootstrap/dist/css/bootstrap.min.css';
const client = new ApolloClient({
  uri: 'http://localhost:3000/explorer/', // Replace with your actual GraphQL API endpoint
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
      <EmployeeForm />
        <EmployeeList />
      </div>
    </ApolloProvider>
  );
};

export default App;
