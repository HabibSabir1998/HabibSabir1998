import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", '900'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: {
    default: 'Habib Muhammad Sabir ✷ Senior Full Stack Engineer',
    template: '%s - Habib Muhammad Sabir',
  },
  description:
    'Habib Muhammad Sabir — Senior Full Stack Engineer with 7+ years building React/Next.js web apps, Node.js/NestJS backends, and React Native iOS & Android apps shipped to millions of users.',
  icons: {
    icon: './favicon.ico',
  },
  applicationName: 'Habib Muhammad Sabir Portfolio',
  authors: [
    {
      name: 'Habib Muhammad Sabir',
      url: 'https://www.linkedin.com/in/habib-muhammad-sabir-a61127166/',
    },
  ],
  generator: 'Next.js',
  referrer: 'origin',
  themeColor: '#120012',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Habib Muhammad Sabir',
  publisher: 'Habib Muhammad Sabir',
};
