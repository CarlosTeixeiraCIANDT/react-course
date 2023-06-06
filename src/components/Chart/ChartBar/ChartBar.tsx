import './ChartBar.css';

const ChartBar: React.FC<{ value: number, maxValue: number, label: string }> = (props) => {
  const { value, maxValue, label } = props;

  let barFillHeight: string = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  )
}

export { ChartBar };