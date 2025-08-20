export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-5xl px-4 mx-auto md:px-8">{children}</div>;
}
