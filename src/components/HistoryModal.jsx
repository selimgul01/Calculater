import React from "react";

const HistoryModal = ({ isOpen, setIsOpen, history }) => {
  if (!isOpen) return null

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-[250px] animate-slide-up">
        <h2 className="text-lg font-semibold text-center mb-4">History</h2>

        {history.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">No history yet</p>
        ) : (
          <ul className="space-y-2">
            {history.slice(0,3).map((item, index) => (
              <li
                key={index}
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-center"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={()=>setIsOpen(false)}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HistoryModal;
