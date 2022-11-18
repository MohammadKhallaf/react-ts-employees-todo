type Props = { children: React.ReactNode };

const PageWrapper = ({ children }: Props) => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24">
        {children}
      </div>
    </section>
  );
};

export default PageWrapper;
