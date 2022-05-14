import React from 'react';
import PropTypes from 'prop-types';

function LightGalleryB(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="mx-auto lg:w-2/3">
          <div className="relative flex flex-wrap w-full px-10 py-32 mb-4 bg-gray-100">
            <img
              alt="gallery"
              className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
              src="https://dummyimage.com/820x340"
            />
            <div className="relative z-10 w-full text-center">
              <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
                Shooting Stars
              </h2>
              <p className="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
              <a
                href
                className={`mt-3 text-${props.theme}-500 inline-flex items-center`}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                <img
                  alt="gallery"
                  className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                  src="https://dummyimage.com/542x460"
                />
                <div className="relative z-10 w-full text-center">
                  <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a
                    href
                    className={`mt-3 text-${props.theme}-500 inline-flex items-center`}
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-2">
              <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                <img
                  alt="gallery"
                  className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                  src="https://dummyimage.com/542x420"
                />
                <div className="relative z-10 w-full text-center">
                  <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a
                    href
                    className={`mt-3 text-${props.theme}-500 inline-flex items-center`}
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LightGalleryB.defaultProps = {
  theme: 'indigo',
};

LightGalleryB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightGalleryB;
