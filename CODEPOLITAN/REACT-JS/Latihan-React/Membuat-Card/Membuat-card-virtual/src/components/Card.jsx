import Button from "./Button";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="bg-blue-gray-500  relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600  bg-clip-border text-white shadow-xl">
          <img
            src={props.gambar}
            alt="anjing"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <h5 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased">
            {props.nama}
          </h5>
          <p className="mb-3 text-sm font-light">{props.pekerjaan}</p>
          <p className="block font-sans text-base font-medium text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            ligula.
          </p>
        </div>
        <div className="p-6 pt-0">
          <Button />
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  gambar: PropTypes.string.isRequired,
  nama: PropTypes.string.isRequired,
  pekerjaan: PropTypes.string.isRequired,
};

export default Card;
