import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
