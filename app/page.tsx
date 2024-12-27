"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/80 to-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Hero copyToClipboard={copyToClipboard} copiedField={copiedField || ''} /> {/* Aseguramos un string */}
        <Skills />
        <Experience />
        <Education />
        <Projects />
        {/*<Contact />*/}
      </div>
    </main>
  );
}
