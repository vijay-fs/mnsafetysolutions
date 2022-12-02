import objContact from "../SiteData/contactInfo";
import React from "react";

export default function Contactpage() {
  return (
    <React.Fragment>
      <div className="mx-auto md:py-4 md:px-4">
        <div className="md:pt-20 md:mx-80 my-14 md:my-0">
          <h2 className="text-4xl text-slate-700 text-center">
            {objContact.title}
          </h2>
          <p className="md:py-20 p-10 md:px-0 text-sm text-justify leading-6 md:leading-8">
            {objContact.desp}
          </p>
        </div>
        <div className="flex justify-around md:mx-40 grid grid-cols-1 lg:grid-cols-3">
          <div className="text-center">
            <div className="md:w-40 bg-green-800 rounded-full w-40 mx-auto py-8 md:py-10">
              <h2 className="text-4xl text-white">{objContact.call}</h2>
            </div>
            <div className="my-10 text-xs mx-auto text-center grid grid-rows-4 gap-2">
              <a href={`tel:${objContact.ph1}`} className="text-sm">
                {objContact.ph1}
              </a>
              <a href={`tel:${objContact.ph2}`} className="text-sm">
                {objContact.ph2}
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-700 rounded-full w-40 mx-auto py-8 md:py-10">
              <h2 className="text-4xl text-white">{objContact.mail}</h2>
            </div>
            <div className="mt-10 mx-auto grid grid-rows-4 gap-2 text-center">
              <a href={`mailto:${objContact.mail1}`} className="text-sm">
                {objContact.mail1}
              </a>
              <a href={`mailto:${objContact.mail2}`} className="text-sm">
                {objContact.mail2}
              </a>
            </div>
          </div>
          <div className="text-center mb-10">
            <div className="bg-gray-700 rounded-full w-60 py-8 md:py-10 mx-auto">
              <h2 className="text-4xl text-white">{objContact.addr}</h2>
            </div>
            <div className="mx-auto px-10 py-12 md:py-10">
              <p className="text-sm text-justify leading-8">
                <b className="text-bold pr-2">Registered Office:</b>
                {objContact.addrdesp1}
              </p>
              <p className="text-sm text-justify leading-8">
                <b className="text-bold pr-2"> Postal:</b>
                {objContact.addrdesp2}
              </p>
            </div>
          </div>
        </div>
        <iframe
          title="maps"
          className="w-full h-96 md:my-20 md:w-full md:h-screen md:p-20"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.6194854607543!2d75.14295421484928!3d15.342900589333107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIwJzM0LjQiTiA3NcKwMDgnNDIuNSJF!5e0!3m2!1sen!2sin!4v1583151791801!5m2!1sen!2sin"
          frameBorder="0"
        ></iframe>
      </div>
    </React.Fragment>
  );
}
