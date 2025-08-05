import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Header from "@/components/base/header";
import '@mantine/carousel/styles.css';
import Footer from "@/components/base/footer";

export const metadata: Metadata = {
  title: "Graph - Web Development Agency",
  description: "Graph is a specialized team designing innovative and scalable web platforms to empower businesses and create digital value.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <Header>
            {children}
          </Header>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
