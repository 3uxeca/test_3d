type PageTitleProps = {
  pageName: string;
}

const PageTitle = (props:PageTitleProps) => {
  const { pageName } = props;
  return (
    <div className='text-2xl font-extrabold'>{pageName}</div>
  )
}

export default PageTitle;