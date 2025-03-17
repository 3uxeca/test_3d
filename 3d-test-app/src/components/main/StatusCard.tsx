type StatusCardProps = {
  title: string;
  value: any;
  status: "LOW" | "MEDIUM" | "HIGH";
}

const StatusCard = (props:StatusCardProps) => {
  const { title, value, status } = props;
  const statusColorMap = {
    'LOW': 'bg-green-500',
    'MEDIUM': 'bg-orange-400',
    'HIGH': 'bg-red-500'
  };

  return (
    <div className='w-80 py-6 px-4 flex justify-between items-stretch rounded-md border'>
      <div className='flex justify-between items-start'>
        <span className={`w-3 h-3 mr-3 rounded-full ${statusColorMap[status]}`} />
        <div className='text-lg font-bold'>{title}</div>
      </div>
      <div className='text-2xl font-extrabold'>{value}</div>
    </div>
  )
}

export default StatusCard;