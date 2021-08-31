import React from 'react';
import { Statistic as StatisticComp, StatisticProps } from 'antd';

interface IStatistic extends StatisticProps{}

const Statistic: React.FC<IStatistic> & {
  Countdown: typeof StatisticComp.Countdown
}= (props) => {
  return (
   <StatisticComp {...props} />
  );
};

Statistic.Countdown = StatisticComp.Countdown

export default Statistic;

