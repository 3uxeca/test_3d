'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  IconBarchart,
  IconLogo,
  IconSettings,
  IconTimer,
} from '@public/images';

import SidebarMenuItem from '@/widgets/sidebar/SidebarMenuItem';

const Sidebar = () => {
  const currentPath = usePathname();
  const menuData = [
    {
      icon: IconTimer,
      title: '실시간 대기열 현황',
      path: '/',
    },
    {
      icon: IconBarchart,
      title: '대시보드',
      path: '/dashboard',
    },
    {
      icon: IconSettings,
      title: '관리자 페이지',
      path: '/management',
    },
  ];
  return (
    <div className="flex w-[240px] flex-shrink-0 flex-col justify-between bg-darkgray">
      <div className="w-full">
        <div className="z-10 mb-43pxr mt-40pxr flex flex-col items-center justify-center gap-2 px-24pxr text-white">
          <Link href={'/'}>
            <div className="flex justify-center text-4xl font-bold">
              김해국제공항
            </div>
            <div className="mt-8pxr text-center text-lg font-bold">
              탑승수속 소요시간
              <br />
              분석 시스템
            </div>
          </Link>
        </div>

        <div className="">
          {menuData.map((item, index) => {
            const { icon, title, path } = item;
            return (
              <Link href={path} key={index}>
                <SidebarMenuItem
                  icon={icon}
                  title={title}
                  isActive={currentPath === path}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mb-40pxr flex w-full items-center justify-center">
        <Image src={IconLogo} alt={'SOSLAB ICON'} width={120} height={120} />
      </div>
    </div>
  );
};

export default Sidebar;
