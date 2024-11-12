import { TransactionData } from "./dashboardTypes.ts";

function Transaction({
  transactiondata,
}: {
  transactiondata: TransactionData | null;
}) {
  return (
    <>
      {transactiondata ? (
        <>
          <p>{transactiondata?.date}</p>
          <p>{transactiondata?.amount}</p>
          <p>{transactiondata?.details}</p>
          <p>{transactiondata?.type}</p>
          <p>{transactiondata?.toFrom}</p>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export default Transaction;
