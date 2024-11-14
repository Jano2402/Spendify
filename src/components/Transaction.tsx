import { TransactionData } from "./dashboardTypes.ts";

function Transaction({ data }: { data: TransactionData[] }) {
  return (
    <>
      {data ? (
        <>
          {data.map((data, index) => (
            <p key={index}>
              {/* Renderizar los datos del formulario en una sola línea */}
              {Object.entries(data)
                .map(([key, value]) => `${key}: ${value}`)
                .join(", ")}
            </p>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export default Transaction;
