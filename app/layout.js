import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import REHeader from "@/components/REHeader";
import RESubHeader from "@/components/RESubHeader";
import REFooter from "@/components/REFooter";

export const metadata = {
  title: "Rental",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MantineProvider theme={theme}>
        <body>
          <REHeader />
          <RESubHeader />
          {children}
          <REFooter />
        </body>
      </MantineProvider>
    </html>
  );
}
