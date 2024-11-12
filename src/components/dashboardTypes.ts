export type TransactionData = {
  date: string;
  amount: string;
  details: string;
  type: "" | "sent" | "received"; // Solo puede ser "sent" o "received"
  toFrom: string;
};
