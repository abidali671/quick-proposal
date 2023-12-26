import Background from "@/assets/auth-background.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center p-5 md:p-20 max-md:justify-center">
      <img
        className="left-0 top-0 absolute h-full w-full object-cover grayscale"
        src={Background.src}
        alt="background"
      />
      <div className="bg-gray-dark shadow p-5 relative w-full max-w-sm rounded-md">
        {children}
      </div>
    </div>
  );
}
