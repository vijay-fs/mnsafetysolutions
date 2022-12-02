import React from "react";
import objAbout from "../SiteData/aboutInfo";

export default function AboutPage() {
  return (
    <React.Fragment>
      <div className="md:mx-20">
        <div className="py-12 md:my-10 bg-green-900">
          <h2 className="text-yellow-400 text-3xl text-center py-2 md:text-left md:py-2 md:mx-10">
            {objAbout.companyprofile}
          </h2>
          <p className="text-justify text-white text-sm px-14 py-8 leading-6 md:text-sm md:leading-6 md:mx-10">
            {objAbout.companyprofiledesp}
          </p>
        </div>
        <div className="py-12 md:my-10">
          <h2 className="text-3xl text-center md:text-left text-red-700 mb-4 md:px-10">
            {objAbout.ourquality}
          </h2>
          <p className="text-justify text-sm px-14 py-8 leading-6 md:text-sm md:leading-6 md:mx-10">
            {objAbout.ourqualitydesp}
          </p>
        </div>
        <div className="bg-green-900 py-12 px-8 md:py-20 md:px-16">
          <h2 className="text-3xl text-center my-4 md:text-4xl text-yellow-100 md:my-4">
            {objAbout.ourexpertise}
          </h2>
          <div className="grid mx-6 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl my-8 text-yellow-400 border-b-4 border-yellow-400">
                {objAbout.ourexpertiseh1}
              </h3>
              <p className="text-sm text-justify text-white leading-6">
                {objAbout.ourexpertiseh1desp}
              </p>
            </div>
            <div>
              <h3 className="text-xl my-8 text-yellow-400 border-b-4 border-yellow-400">
                {objAbout.ourexpertiseh2}
              </h3>
              <p className="text-sm text-justify text-white leading-6">
                {objAbout.ourexpertiseh2desp}
              </p>
            </div>
            <div>
              <h3 className="text-xl my-8 text-yellow-400 border-b-4 border-yellow-400">
                {objAbout.ourexpertiseh3}
              </h3>
              <p className="text-sm text-justify text-white leading-6 pb-8">
                {objAbout.ourexpertiseh3desp}
              </p>
            </div>
          </div>
        </div>
        <div className="p-14 md:my-10 md:p-10 md:px-20">
          <h2 className="text-3xl text-center text-red-700 mb-4 py-4">
            {objAbout.ourmission}
          </h2>
          <p className="text-sm text-justify leading-6">
            {objAbout.ourmissiondesp}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
