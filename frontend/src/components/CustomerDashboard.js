import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";

function CustomerDashboard() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <Card>
      <Card.Header>
        <span className="me-1">
          <FontAwesomeIcon icon={faDashboard} />
        </span>
        Dashboard
      </Card.Header>
      <Card.Body className="p-4 m-0">
        <Row>
          <Col lg={12}>
            <h3>{user.emailid}</h3>
            <h4>Welcome to Customer Dashboard </h4>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CustomerDashboard;
