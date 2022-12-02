import { customers } from "../SiteData/customers";

export default function HomeCustomers() {
  return (
    <section className="mt-20 md:mt-40">
      <h1 className="text-center text-3xl md:text-4xl text-slate-700">
        Our Customers
      </h1>
      <div className="grid my-10 mx-10 md:mt-16 gap-4 grid-cols-5 items-center md:mx-40 md:grid-cols-5 md:gap-20 md:justify-between items-center">
        {customers.map((cust) => (
          <div key={cust.alt}>
            <img src={cust.src} alt={cust.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
