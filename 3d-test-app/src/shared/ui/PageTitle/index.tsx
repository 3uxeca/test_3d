import clsx from 'clsx';
import { ReactNode } from 'react';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
};

const PageTitle = (props: PageTitleProps) => {
  const { title, subtitle, icon } = props;
  return (
    <div className={clsx('flex items-center justify-between')}>
      {icon && <span>{icon}</span>}
      <div className="pb-48pxr pl-40pxr pt-40pxr">
        <div className="text-3xl font-bold">{title}</div>
        {subtitle && (
          <div className="mt-6pxr text-sm text-textgray">{subtitle}</div>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
