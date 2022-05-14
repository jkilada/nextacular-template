import React from 'react';

function LightStatisticB() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="flex flex-wrap content-start mt-auto mb-auto -mx-4 lg:w-1/2 sm:w-2/3 sm:pr-10">
          <div className="w-full px-4 mb-6 sm:p-4">
            <h1 className="mb-2 text-xl font-medium text-gray-900 title-font">
              Moon hashtag pop-up try-hard offal truffaut
            </h1>
            <div className="leading-relaxed">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
          <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 className="text-3xl font-medium text-gray-900 title-font">
              2.7K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 className="text-3xl font-medium text-gray-900 title-font">
              1.8K
            </h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 className="text-3xl font-medium text-gray-900 title-font">
              35
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 className="text-3xl font-medium text-gray-900 title-font">4</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
        <div className="w-full mt-6 overflow-hidden rounded-lg lg:w-1/2 sm:w-1/3 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="https://dummyimage.com/600x300"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
}

export default LightStatisticB;
