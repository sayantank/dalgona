export default function Container({ children }) {
  return (
    <div className="relative min-w-3/4 max-w-9/10 md:max-w-2xl mx-auto my-28 md:my-40">
      {children}
    </div>
  );
}
