type Props = { title: string };

const PageHeader = ({ title }: Props) => {
  return (
    <div className="mb-12 flex w-full flex-col text-center">
      <h1 className="page-header title-font">{title}</h1>
    </div>
  );
};

export default PageHeader;
