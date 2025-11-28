import type { Metadata } from "next";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "FAQ - Ashvini Corporation.",
};

export default function FAQPage() {
  return <FAQSection />;
}
