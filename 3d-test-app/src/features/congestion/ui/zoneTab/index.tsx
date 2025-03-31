'use client';

import clsx from 'clsx';

import useCongestionFeatureStore from '../../store/useCongestionFeatureStore';

const ZoneTab = () => {
  const { selectedZone, setSelectedZone } = useCongestionFeatureStore();
  const zoneData = [
    { title: '신분 검색장', id: 'zone_1' },
    { title: '보안 검색장', id: 'zone_2' },
    { title: '출국 수속장', id: 'zone_3' },
  ];
  const onClickTab = (title: string) => {
    if (selectedZone !== title) {
      setSelectedZone(title);
    }
  };
  return (
    <div className="flex items-center justify-start gap-x-40pxr px-40pxr">
      {zoneData.map((item) => {
        const { title, id } = item;
        const isActive = selectedZone === title;
        return (
          <div
            key={id}
            className={clsx(
              'flex w-140pxr cursor-pointer flex-col items-center justify-center text-lg font-bold',
              isActive ? 'text-black' : 'text-textgray',
            )}
            onClick={() => onClickTab(title)}
          >
            <div className="h-32pxr">{title}</div>
            {isActive && (
              // <span className="block h-4pxr w-110pxr rounded-lg bg-darkgray"></span>
              <span
                className={clsx(
                  'block h-4pxr rounded-lg bg-darkgray',
                  'animate-underline-grow origin-center',
                )}
                style={{ width: '110px' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ZoneTab;
