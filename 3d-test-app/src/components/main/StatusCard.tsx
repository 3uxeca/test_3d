type StatusCardProps = {
  title: string;
  value: number;
  status: 'LOW' | 'MEDIUM' | 'HIGH';
};

const StatusCard = (props: StatusCardProps) => {
  const { title, value, status } = props;
  const statusColorMap = {
    LOW: 'bg-green-500',
    MEDIUM: 'bg-orange-400',
    HIGH: 'bg-red-500',
  };

  return (
    <div className="flex w-80 items-stretch justify-between rounded-md border px-4 py-6">
      <div className="flex items-start justify-between">
        <span
          className={`mr-3 h-3 w-3 rounded-full ${statusColorMap[status]}`}
        />
        <div className="text-lg font-bold">{title}</div>
      </div>
      <div className="text-2xl font-extrabold">{value}</div>
    </div>
  );
};

export default StatusCard;
