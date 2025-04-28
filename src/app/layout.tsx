import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "@/lib/theme-provider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${silka.className}`}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div style={{
          flex: "none",
          height: "100%",
          left: "calc(50.00000000000002% - 100% / 2)",
          pointerEvents: "none",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "4",
        }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "64px",
              backgroundRepeat: "repeat",
              backgroundImage: "url(/Static.png)",
              opacity: "0.06",
              borderRadius: "0px",
            }}
          />
        </div>
        {children}
      </ThemeProvider>
    </div>
  );
}
