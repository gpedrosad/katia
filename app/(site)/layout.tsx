import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
