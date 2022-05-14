import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Link from 'next/link';

import sanityClient from '@/lib/server/sanity';
import getSettings from '@/config/theme';

const builder = imageUrlBuilder(sanityClient);

const Basic = ({ logo, menu, cta }) => {
  const imageAsset = builder.image(logo.logo.asset);
  const imageOptions = builder.image(logo.logo);

  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <Image
              alt={imageOptions.options.source.alt}
              src={imageAsset.url()}
              width={80}
              height={80}
            />
            <span className="ml-3 text-xl">
              {imageOptions.options.source.textLogo}
            </span>
          </a>
        </Link>
        {menu && (
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            {menu.map((item, index) => (
              <Link key={index} href={item.path}>
                <a
                  className="mr-5 hover:text-gray-900"
                  target={item.isExternal ? '_blank' : undefined}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
        )}
        {cta &&
          cta.map((item, index) => (
            <Link key={index} href={item.path}>
              <a
                className={`inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0 bg-${
                  getSettings().options.color
                }-500`}
              >
                {item.name}
              </a>
            </Link>
          ))}
      </div>
    </header>
  );
};

export default Basic;
