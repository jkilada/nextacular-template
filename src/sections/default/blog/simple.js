import React from 'react';
import PropTypes from 'prop-types';

function LightBlogE(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          <div className="px-4 py-8 lg:w-1/3">
            <div className="flex items-start h-full">
              <div className="flex flex-col flex-shrink-0 w-12 leading-none text-center">
                <span className="pb-2 mb-2 text-gray-500 border-b-2 border-gray-200">
                  Jul
                </span>
                <span className="text-lg font-medium leading-none text-gray-800 title-font">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2
                  className={`tracking-widest text-xs title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  CATEGORY
                </h2>
                <h1 className="mb-3 text-xl font-medium text-gray-900 title-font">
                  The 400 Blows
                </h1>
                <p className="mb-5 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a href className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    className="flex-shrink-0 object-cover object-center w-8 h-8 rounded-full"
                  />
                  <span className="flex flex-col flex-grow pl-3">
                    <span className="font-medium text-gray-900 title-font">
                      Alper Kamu
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="px-4 py-8 lg:w-1/3">
            <div className="flex items-start h-full">
              <div className="flex flex-col flex-shrink-0 w-12 leading-none text-center">
                <span className="pb-2 mb-2 text-gray-500 border-b-2 border-gray-200">
                  Jul
                </span>
                <span className="text-lg font-medium leading-none text-gray-800 title-font">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2
                  className={`tracking-widest text-xs title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  CATEGORY
                </h2>
                <h1 className="mb-3 text-xl font-medium text-gray-900 title-font">
                  Shooting Stars
                </h1>
                <p className="mb-5 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a href className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/102x102"
                    className="flex-shrink-0 object-cover object-center w-8 h-8 rounded-full"
                  />
                  <span className="flex flex-col flex-grow pl-3">
                    <span className="font-medium text-gray-900 title-font">
                      Holden Caulfield
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="px-4 py-8 lg:w-1/3">
            <div className="flex items-start h-full">
              <div className="flex flex-col flex-shrink-0 w-12 leading-none text-center">
                <span className="pb-2 mb-2 text-gray-500 border-b-2 border-gray-200">
                  Jul
                </span>
                <span className="text-lg font-medium leading-none text-gray-800 title-font">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2
                  className={`tracking-widest text-xs title-font font-medium text-${props.theme}-500 mb-1`}
                >
                  CATEGORY
                </h2>
                <h1 className="mb-3 text-xl font-medium text-gray-900 title-font">
                  Neptune
                </h1>
                <p className="mb-5 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a href className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/101x101"
                    className="flex-shrink-0 object-cover object-center w-8 h-8 rounded-full"
                  />
                  <span className="flex flex-col flex-grow pl-3">
                    <span className="font-medium text-gray-900 title-font">
                      Henry Letham
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LightBlogE.defaultProps = {
  theme: 'indigo',
};

LightBlogE.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightBlogE;
