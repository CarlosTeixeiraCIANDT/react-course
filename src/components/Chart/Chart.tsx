import './Chart.css';
import { ChartBar } from './ChartBar/ChartBar';

const Chart: React.FC<{ dataPoints: { label: string, value: number }[] }> = (props) => {

  const { dataPoints } = props;
  const dataPointsValues = dataPoints.map(dp => dp.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {dataPoints.map((dp) => <ChartBar key={dp.label} maxValue={totalMaximum} value={dp.value} label={dp.label} />)}
    </div>
  )
}

export { Chart };