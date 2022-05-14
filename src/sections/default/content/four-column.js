import React from 'react';
import PropTypes from 'prop-types';

function LightContentB(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <div className={`h-1 w-20 bg-${props.theme}-500 rounded`}></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom
            prism food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-40 mb-6 rounded"
                src="https://dummyimage.com/720x400"
                alt="content"
              />
              <h3
                className={`tracking-widest text-${props.theme}-500 text-xs font-medium title-font`}
              >
                SUBTITLE
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Chichen Itza
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-40 mb-6 rounded"
                src="https://dummyimage.com/721x401"
                alt="content"
              />
              <h3
                className={`tracking-widest text-${props.theme}-500 text-xs font-medium title-font`}
              >
                SUBTITLE
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Colosseum Roma
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-40 mb-6 rounded"
                src="https://dummyimage.com/722x402"
                alt="content"
              />
              <h3
                className={`tracking-widest text-${props.theme}-500 text-xs font-medium title-font`}
              >
                SUBTITLE
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Great Pyramid of Giza
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-40 mb-6 rounded"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3
                className={`tracking-widest text-${props.theme}-500 text-xs font-medium title-font`}
              >
                SUBTITLE
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                San Francisco
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LightContentB.defaultProps = {
  theme: 'indigo',
};

LightContentB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightContentB;
