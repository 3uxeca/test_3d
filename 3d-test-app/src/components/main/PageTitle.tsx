import { ReactNode } from 'react';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
};

const PageTitle = (props: PageTitleProps) => {
  const { title } = props;
  return (
    <div className="">
      <div className="text-2xl font-extrabold">{title}</div>
    </div>
  );
};

export default PageTitle;
