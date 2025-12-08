import ServicesPage from "../../components/ServicesPage";

export const metadata = {
  title: "Our Services | VexaLix Technology",
  description:
    "Comprehensive IT services including cloud solutions, cybersecurity, custom development, data analytics, mobile solutions, and AI/ML. Transform your business with our expert team.",
  keywords:
    "IT services, cloud solutions, cybersecurity, custom development, mobile apps, AI, machine learning, data analytics",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-black">
      <ServicesPage />
    </main>
  );
}
