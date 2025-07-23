import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { Filters } from "@/widgets/filters";
import { ProductList } from "@/widgets/product-list";
export default function Home() {
  return (
    <>
      <Header />
      <div className="page">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="main">
          <section className="filters">
            <Filters />
          </section>
          <section className="product-grid">
            <ProductList />
          </section>
        </main>
      </div>
    </>
  );
}
