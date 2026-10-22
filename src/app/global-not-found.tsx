import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { assetPath } from "@/config/site";
import "./globals.css";
export const metadata = {
  title: "404 | Avyn",
  icons: { icon: assetPath("/images/brand/mark.png") },
};
export default function NotFound() {
  const es = getDictionary("es").notFound,
    en = getDictionary("en").notFound;
  return (
    <html lang="es">
      <body>
        <main className="container not-found">
          <p className="eyebrow">404</p>
          <h1>{es.title}</h1>
          <p lang="en" className="mt-6">
            {en.title}
          </p>
          <div className="button-row mt-8 justify-center">
            <Link className="button" href="/es/">
              {es.back}
            </Link>
            <Link className="button secondary" href="/en/" lang="en">
              {en.back}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
