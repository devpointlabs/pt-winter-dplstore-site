import React from 'react';
import {Card, Button, Image, Modal, ModalContent} from 'semantic-ui-react';

const AdminProductPreview = ({ name, price, description, stock, image, id, remove, edit }) => (
  <Card>
    <Image src={image}/>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>${price}</Card.Meta>
      <Card.Meta>Items: {stock}</Card.Meta>
      <Card.Description>Description: {description}</Card.Description> 
    </Card.Content>
    <Card.Content extra>
      <Modal trigger={<Button>Edit</Button>}>
        <Modal.Header>Edit: {name}</Modal.Header>
        <ModalContent>
          { edit(id) }
        </ModalContent>  
      </Modal>
      <Button
        onClick={() => remove(id)}
      >
        Delete Product
      </Button>
    </Card.Content>
  </Card>
)

export default AdminProductPreview;