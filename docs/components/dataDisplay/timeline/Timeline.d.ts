import React from 'react';
import { Timeline as TimelineComp, TimelineProps } from 'antd';
interface ITimeline extends TimelineProps {
}
declare const Timeline: React.FC<ITimeline> & {
    Item: typeof TimelineComp.Item;
};
export default Timeline;
