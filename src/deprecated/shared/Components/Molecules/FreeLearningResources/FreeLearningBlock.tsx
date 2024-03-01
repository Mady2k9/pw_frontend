import { memo } from 'react';
import { menuItemsDatas } from '../Footer/FooterTypeD';
import eventTracker from '../../EventTracker/eventTracker';

const FreeLearningBlock = ({ data }: { data: menuItemsDatas }) => {
  const bundle = [];
  for (let i = 0; i < data.menuItems.length / 10; i++) {
    const row = [];
    for (
      let j = 0;
      j <
      Math.min(10, data.menuItems.slice(i * 10, data.menuItems.length).length);
      j++
    ) {
      const element = data.menuItems[i * 10 + j];
      row.push(element);
    }

    bundle.push(row);
  }
  const footerLinksClick = (main_category: string, category: string) => {
    eventTracker.footerClick(main_category, category);
  };
  return (
    <div>
      <div className="font-[600] text-[#3d3d3d] my-3 text-base text-start">
        {data?.menuTitle}
      </div>
      <div className="flex flex-row flex-wrap">
        {bundle?.map((item, index) => (
          <div key={index} className="w-[200px]  mr-[85px] sm:mb-[20px]">
            {item?.map((i, index) => (
              <a key={index} href={i?.redirectionUrl} aria-label={i?.menuTitle}>
                <div
                  onClick={() =>
                    footerLinksClick(data?.menuTitle, i?.menuTitle)
                  }
                  className="font-[500]  text-[#757575] py-[6px] text-xs  hover:underline"
                >
                  {i?.menuTitle}
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(FreeLearningBlock);
