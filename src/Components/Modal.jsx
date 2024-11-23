// components/Modal.js

const Modal = ({ isOpen, onClose, imageSrc, title, description }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-4 relative max-w-lg mx-auto">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
            &times;
          </button>
          <img
            src={imageSrc}
            alt="Project"
            className="w-full h-auto max-h-screen object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Modal;
  