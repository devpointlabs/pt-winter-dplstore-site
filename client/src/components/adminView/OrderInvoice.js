import React from 'react';
import { Segment, Table  } from 'semantic-ui-react';

  // order: { firstName, middleName, lastName, address, city, zipcode, state, phone, email }, 


const OrderInvoice = ({ firstName, lastName, address, city, zipcode, state, phone, email }) => (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>City</Table.HeaderCell>
          <Table.HeaderCell>State</Table.HeaderCell>
          <Table.HeaderCell>Zipcode</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{lastName}, {firstName}</Table.Cell>
          <Table.Cell>{address}</Table.Cell>
          <Table.Cell>{city}</Table.Cell>
          <Table.Cell>{state}</Table.Cell>
          <Table.Cell>{zipcode}</Table.Cell>
          <Table.Cell>{phone}</Table.Cell>
          <Table.Cell>{email}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
)

export default OrderInvoice;