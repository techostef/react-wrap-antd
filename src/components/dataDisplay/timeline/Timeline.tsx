import React from 'react';
import { Timeline as TimelineComp, TimelineProps } from 'antd';

interface ITimeline extends TimelineProps {
}

const Timeline: React.FC<ITimeline> & {
  Item: typeof TimelineComp.Item,
} = ({children, ...props}) => {

  return (
    <TimelineComp
      {...props}
    >
      { children }
    </TimelineComp>
  );
};

Timeline.Item = TimelineComp.Item;

export default Timeline;
