import {
   Link
} from "react-router-dom";

const Footer = () => {
  // States

  // Lifecycle

  // Functions

  return (
    <>
      <footer className="w-full h-40 bg-[#6b8678]">
        <div className="flex justify-center items-center">
          <div className="mt-10 flex flex-col justify-center items-center gap-3 text-[12px]">
            <p>Artelligence INC. ©2022</p>
            <a className="" href="acejokercapital@gmail.com"></a>
            <Link to="/privacy-policy" className="">
              <p className="underline hover:cursor-pointer">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
