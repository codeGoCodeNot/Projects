const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1200px] max-h-[1200px]:mx-2 mx-auto py-2">
      {children}
    </div>
  );
};

export default Container;
