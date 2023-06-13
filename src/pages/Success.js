import Header from "../Layouts/Header";
import SuccessPurchase from "../components/SuccessPurchase";

export default function Success() {
  return (
    <Header height={window.innerHeight}>
      <SuccessPurchase />
    </Header>
  );
}
