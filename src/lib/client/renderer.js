import getSettings from '@/config/theme';
import dynamic from 'next/dynamic';

const getDynamicComponent = (theme, section) =>
  dynamic(
    () => import(`../../sections/${theme}/${section._type}/${section.style}`),
    { ssr: true }
  );

const render = (contents) => {
  const settings = getSettings();
  return contents.map((content, index) => {
    const Component = getDynamicComponent(settings.theme, content.section[0]);
    // console.log(content);
    return <Component key={index} {...content.section[0]} />;
  });
};

export default render;
