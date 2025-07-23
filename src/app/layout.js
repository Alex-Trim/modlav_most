import "@/shared/styles/globals.css";
import { QueryProvider } from "@/shared/providers/QueryProvider"; // путь может отличаться

export const metadata = {
  title: "MODLAV Most",
  description: "MODLAV Most test next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
