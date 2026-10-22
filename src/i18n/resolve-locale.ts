import { notFound } from "next/navigation";
import { isLocale, type LocaleParams } from "./config";
export async function resolveLocale(params: LocaleParams["params"]) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}
