import { Suspense } from "react";
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
      <Suspense
        fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>
        }
      >
        <ServicesPage />
      </Suspense>
    </main>
  );
}
