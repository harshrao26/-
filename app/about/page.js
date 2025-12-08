import Navbar from "../../components/Navbar";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us | VexaLix Technology",
  description:
    "VexaLix Technology Private Limited - Global provider of IT services, digital transformation, application development, cybersecurity, cloud solutions, and consulting services.",
  keywords:
    "about us, VexaLix Technology, IT services, cloud solutions, cybersecurity, digital transformation, technology partner",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <AboutUs />
    </main>
  );
}
