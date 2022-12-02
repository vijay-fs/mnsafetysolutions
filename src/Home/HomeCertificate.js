import { Link } from "react-router-dom";
import certificate1pdf from "../assets/certificate/IN15673B-M.N.SAFETY SOLUTIONS.pdf";
import certificate2pdf from "../assets/certificate/IN15673C-1-M.N.SAFETY SOLUTIONS.pdf";
import certificate1img from "../assets/img/IN15673B-M.N.SAFETY SOLUTIONS.min.jpg";
import certificate2img from "../assets/img/IN15673C-1-M.N.SAFETY SOLUTIONS.min.jpg";

export default function HomeCertificate() {
  return (
    <div className="w-screen">
      <h2 className="text-center text-3xl mt-10 md:text-4xl md:mt-20">
        Certificates
      </h2>
      <div className="flex justify-center flex-wrap md:flex-nowrap px-8 md:px-24 text-center">
        <div className="mt-8 mr-0 md:mr-16">
          <Link
            to={certificate1pdf}
            target="_blank"
            className="text-gray-700 text-sm md:text-lg hover:text-blue-800"
          >
            <img
              className="mx-auto mb-8"
              src={certificate1img}
              alt="IN15673B-M.N.SAFETY SOLUTIONS"
            />
            Environmental Management System (EMS) 140001:2015
          </Link>
        </div>
        <div className="mt-8">
          <Link
            to={certificate2pdf}
            target="_blank"
            className="text-gray-700 text-sm md:text-lg hover:text-blue-800"
          >
            <img
              className="mx-auto mb-8"
              src={certificate2img}
              alt="IN15673B-M.N.SAFETY SOLUTIONS"
            />
            Occupational Health and Safety Management Systems (OHSMS) 4500:2018
          </Link>
        </div>
      </div>
    </div>
  );
}
