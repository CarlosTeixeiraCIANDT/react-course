import { ChartBar } from './ChartBar/ChartBar';
import './Chart.css';

const Chart: React.FC<{ dataPoints: { label: string, value: number }[] }> = (props) => {

  const { dataPoints } = props;
  const dataPointsValues = dataPoints.map(dp => dp.value);
  const totalMaximum = Math.max(...dataPointsValues);


  return (
    <div className='chart'>
      {dataPoints.map(dp => <ChartBar key={dp.label} value={dp.value} maxValue={totalMaximum} label={dp.label} />)}
    </div>
  )
}

export { Chart }