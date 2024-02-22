import  { memo } from 'react';
import Style from './HtmlContentWidget.module.css';

export interface HtmlContentWidgetProps {
  content: string;
 }


const HtmlContentWidget = ({ content }: { content: string; }) => {

  return (
    <>
       {
        content && <div className={`${Style.containerText}`} dangerouslySetInnerHTML={{ __html: content }} />
    }
    </>
  );
};

export default memo(HtmlContentWidget);
