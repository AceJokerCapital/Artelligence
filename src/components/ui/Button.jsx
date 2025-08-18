import { Link } from "react-router-dom";

const Button = ({ icon, text, btnLink, btnFn, btnClass }) => {
  // States

  // Lifecycle

  // Functions

  return (
    <>
      {btnLink ? (
        <>
          <Link
            to={`${btnLink}`}
            className={`max-xs:w-14 max-xs:text-[12px] w-20 flex items-center justify-center font-mono font-medium bg-[#9fbf93] text-white px-4 py-2 rounded-md hover:scale-105 gap-2 ${btnClass}`}
            onClick={() => btnFn && btnFn()}
          >
            {icon && icon}
            {`${text}`}
          </Link>
        </>
      ) : (
        <>
          <button
            className={`max-xs:w-14 max-xs:text-[12px] w-20 flex items-center justify-center font-mono font-medium bg-[#9fbf93] text-white px-4 py-2 rounded-md hover:scale-105 gap-2 ${btnClass}`}
            onClick={() => btnFn && btnFn()}
          >
            {icon && icon}
            {`${text}`}
          </button>
        </>
      )}
    </>
  );
};

export default Button;
