import "../app/globals.css";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Vahap Courses",
  description: "Course materials delivered by me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-heebo bg-zinc-900">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
