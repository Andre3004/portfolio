import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Andre Ferreira | Senior Tech Lead & Full-Stack Engineer",
  description: "Tech Lead specializing in scalable architectures, distributed systems, and full-stack development. Building impactful solutions for education, mining, and enterprise sectors.",
  keywords: ["Tech Lead", "Full-Stack Engineer", "React", "Node.js", "AWS", "Microservices", "Dublin"],
  authors: [{ name: "Andre Luiz Damasceno Ferreira Junior" }],
  openGraph: {
    title: "Andre Ferreira | Senior Tech Lead",
    description: "Building scalable systems that make a difference",
    type: "website",
  },
};

// Script to prevent flash of wrong theme
const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="grain" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
