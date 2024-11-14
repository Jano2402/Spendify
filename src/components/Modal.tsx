import { useState } from "react";
import "./Modal.css";
import { TransactionData } from "./dashboardTypes.ts";

function Modal({
  modal,
  closeModal,
  enviarDatos,
}: {
  modal: boolean;
  closeModal: () => void;
  enviarDatos: (datos: TransactionData) => void;
}) {
  const [formData, setFormData] = useState<TransactionData>({
    date: "",
    amount: "",
    details: "",
    type: "",
    toFrom: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    enviarDatos(formData);
    setFormData({ date: "", amount: "", details: "", type: "", toFrom: "" });
    closeModal();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {modal ? (
        <div className="Modal">
          <h1>Modal</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              name="date"
              placeholder="date"
              value={formData.date}
              onChange={handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            <input
              type="text"
              name="details"
              placeholder="details"
              value={formData.details}
              onChange={handleChange}
            />
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="" disabled selected>
                Type
              </option>
              <option value="sent">sent</option>
              <option value="received">received</option>
            </select>
            <input
              type="text"
              name="toFrom"
              placeholder="toFrom"
              value={formData.toFrom}
              onChange={handleChange}
            />
            <button type="submit">Add Transaction</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Modal;
