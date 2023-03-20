import { Sidebar } from "../components/Sidebar";

const IndexPage = () => {
  return (
    <section className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-3 my-3">
        <div className="flex items-center justify-center min-h-full text-white">
          <h1 className="text-xl">Good morning! 🌤️</h1>
        </div>
      </main>
    </section>
  );
};

export default IndexPage;
