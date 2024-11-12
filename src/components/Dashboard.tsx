import { useState } from "react";
import Modal from "./Modal.tsx";
import { TransactionData } from "./dashboardTypes.ts";
import Transaction from "./Transaction.tsx";

function Dashboard() {
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState<TransactionData | null>(null);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const handleDatos = (datosFormulario: TransactionData) => {
    setDatos(datosFormulario);
  };

  return (
    <>
      <h1>Dashboard</h1>
      <p>Transactions</p>
      <button onClick={openModal}>New transaction</button>
      {modal && <div className="modal-background"></div>}
      <Modal modal={modal} closeModal={closeModal} enviarDatos={handleDatos} />
      <Transaction transactiondata={datos} />
    </>
  );
}
export default Dashboard;
