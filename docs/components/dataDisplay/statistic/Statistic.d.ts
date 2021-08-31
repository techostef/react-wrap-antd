import React from 'react';
import { Statistic as StatisticComp, StatisticProps } from 'antd';
interface IStatistic extends StatisticProps {
}
declare const Statistic: React.FC<IStatistic> & {
    Countdown: typeof StatisticComp.Countdown;
};
export default Statistic;
