import React from "react";
import { Offcanvas } from "react-bootstrap";

type Props = {
  handleClose: (state: boolean) => void;
};
const Sidebar = ({ handleClose }: Props) => {
  return (
    <Offcanvas
      show={true}
      onHide={() => handleClose(false)}
      placement="end"
      sroll={true}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrinho de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>Cart</Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
