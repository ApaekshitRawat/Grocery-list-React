import { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, List }) => {
  useEffect(() => {
    const lol = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearInterval(lol);
  }, [List, removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};
export default Alert;
