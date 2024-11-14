import { useState } from "react";
import Modal from "./Modal.tsx";
import Transaction from "./Transaction.tsx";
import { TransactionData } from "./dashboardTypes.ts";

function Dashboard() {
  const [modal, setModal] = useState(false);
  const [dataList, setDataList] = useState<TransactionData[]>([]);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const handleAddData = (newData: TransactionData) => {
    setDataList((prevDataList: TransactionData[]) => [
      ...prevDataList,
      newData,
    ]);
  };

  return (
    <>
      <h1>Dashboard</h1>
      <p>Transactions</p>
      <button onClick={openModal}>New transaction</button>
      {modal && <div className="modal-background"></div>}
      <Modal
        modal={modal}
        closeModal={closeModal}
        enviarDatos={handleAddData}
      />
      <Transaction data={dataList} />
    </>
  );
}
export default Dashboard;
