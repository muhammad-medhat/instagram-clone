import { useState } from "react";
import { Alert } from "react-bootstrap";

const AlertDismissible = ({ message, variant, deleteAlert }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant={variant}
        onClose={() => {
          deleteAlert();
          setShow(false);
        }}
        dismissible
      >
        {message}
      </Alert>
    );
  } else {
    return null;
  }
};
export default AlertDismissible;
