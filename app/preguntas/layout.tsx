import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";

export default function PreguntasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
