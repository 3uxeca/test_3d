import CongestionMap from '@/features/congestion/ui/congestionMap';
import ZoneTab from '@/features/congestion/ui/zoneTab';
import PageTitle from '@/shared/ui/PageTitle';

const CongestionPage = () => {
  return (
    <div className="h-full w-full">
      <PageTitle
        title="실시간 대기열 현황"
        // subtitle="3D뷰에서 실시간 대기열 현황을 볼 수 있습니다."
      />
      <ZoneTab />
      <div className="h-[calc(100%-160px)]">
        <CongestionMap />
      </div>
    </div>
  );
};

export default CongestionPage;
