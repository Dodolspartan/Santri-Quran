import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { toggleTheme } from "../disk/index"; // Make sure to import only what you need
<<<<<<< HEAD
import Image1 from "../assets/image/icon/Mask group.png";
=======
>>>>>>> bf59c6eb43cf80a063d6e030abdc20e3541328f2

function SettingPages() {
  // Add a key prop to each ListGroup.Item if you're rendering them dynamically

  return (
    <div className="element_set_pages">
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between align-items-start">
          Mode Gelap
          <div>
            {/* Use onChange for Form.Check */}
            <Form.Check
              type="switch"
              id="ChangeTheme"
<<<<<<< HEAD
              onChange={() => toggleTheme()}
              disabled
            />
=======
              onChange={() => toggleTheme()} disabled/>
>>>>>>> bf59c6eb43cf80a063d6e030abdc20e3541328f2
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-start">
          <Link className="link_element" to="/tentangkami">
            Tentang Kami
          </Link>
          <div></div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-start">
          <Link className="link_element" to="/BeriMasukanPages">
            Beri Masukan
          </Link>
          <div></div>
        </ListGroup.Item>
      </ListGroup>
      <div className="element_vr_santri text-center">
        <img className="mb-3" src={Image1} width={20} alt="" />
        <h6>Santri Al-AlQuran</h6>
        <p>Version 0.2</p>
      </div>
    </div>
  );
}

export default SettingPages;
