import Backdrop from "../backdrop/backdrop.component";
import ModalStyle from "./modal.style";

const Modal = (props) => {
  const { children, show, onHide } = props;

  return (
    <ModalStyle show={show}>
      <section className={`z-50 relative bg-white w-full sm:w-full md:w-2/5 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${show ? 'opacity-100 ' :'opacity-100 -translate-y-full scale-75 pointer-events-none'} `}>
        <button onClick={onHide} className="absolute w-8 focus:outline-none text-center z-50 right-0 top-0 cursor-pointer bg-white  rounded-lg p-2 shadow-lg hover:(transform transition scale-125 duration-500 ease-in-out)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
        </button>
        {children}
      </section>
      <Backdrop show={show} onClick={onHide} />
    </ModalStyle>
  );
};

export default Modal;
