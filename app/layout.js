import "./globals.css";
import FooterV3 from "@/components/Footer";
import NavbarV2 from "@/components/Navbar";

export const metadata = {
  title: "VexaLix Technology | Technology. Innovation. Security. Growth.",
  description:
    "Global provider of IT services, digital transformation, application development, cybersecurity, cloud solutions, and consulting services. Serving India, USA, UK, Europe, Dubai, Saudi Arabia, Qatar & Middle East.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster loading on all devices, especially iOS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NavbarV2 />

        {children}
        <FooterV3 />
      </body>
    </html>
  );
}
