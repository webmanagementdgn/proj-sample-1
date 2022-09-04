import CartContainer from "../components/CartContainer";
import { useSelector } from "react-redux";

import Modal from "../components/Modal";
function PersonalCart() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <main>
      {isOpen && <Modal />}

      <CartContainer />
    </main>
  );
}
export default PersonalCart;
