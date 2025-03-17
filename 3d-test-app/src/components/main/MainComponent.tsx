import Canvas3D from '../three/Canvas3D';
import PageTitle from './PageTitle';
import StatusCard from './StatusCard';

type StatusCardProps = {
  title: string;
  value: any;
  status: "LOW" | "MEDIUM" | "HIGH";
}


const MainComponent = () => {
  const statusData: StatusCardProps[] = [
    { title: '입장한 인원(분)', value: 120, status: 'LOW' },
    { title: '현재 대기 인원', value: 85, status: 'MEDIUM' },
    { title: '통과한 인원(분)', value: 90, status: 'HIGH' },
  ]
  return (
    <div className='w-full h-full p-8'>
      <PageTitle pageName='공항 혼잡도 분석' />
      <div className='w-full h-full mt-8 flex justify-start items-start gap-6'>
        <div className='grid grid-rows-3 gap-5'>
          {
            statusData?.map((item, index) => {
              return (
                <StatusCard key={`${index}_status`} title={item.title} value={item.value} status={item.status} />
              )
            })
          }
        </div>
        <div className='w-[100%] h-[80vh] bg-black'>
          <Canvas3D />
        </div>
      </div>
    </div>
  )
}

export default MainComponent;