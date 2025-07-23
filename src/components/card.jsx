export const Card = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center border-gray-600 shadow-lg m-3 p-28">
      {children}
    </div>
  );
};
