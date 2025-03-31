import clsx from 'clsx';

interface SidebarMenuItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  isActive?: boolean;
}

const SidebarMenuItem = ({
  icon: Icon,
  title,
  isActive = true,
}: SidebarMenuItemProps) => {
  return (
    <div className="flex h-60pxr w-full items-center justify-start px-22pxr font-bold">
      <Icon
        width={26}
        height={26}
        className={clsx('mr-20pxr', isActive ? 'opacity-100' : 'opacity-50')}
      />
      <div
        className={clsx('mr-20pxr', isActive ? 'text-white' : 'text-icongray')}
      >
        {title}
      </div>
    </div>
  );
};

export default SidebarMenuItem;
