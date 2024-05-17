import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <div className="container">
        <Footer />
      </div>
    </main>
  );
}
