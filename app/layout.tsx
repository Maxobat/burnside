// import { Recursive } from "next/font/google";
import "../styles.css";

// const recursive = Recursive({
//   axes: ["CASL", "CRSV"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en" className={recursive.className}>
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
