import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0  backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-xl p-1 h-100 shadow-lg w-auto  object-contain overflow-hidden font-Primary m-4 flex flex-col items-center">
        
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-300 text-xl mr-2 mt-1">✕</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
