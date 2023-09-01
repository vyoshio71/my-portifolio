import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="fixed inset-0 d-flex align-items-center justify-content-center bg-dark">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
