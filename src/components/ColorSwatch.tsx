import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface SwatchProps {
  name: string;
  variable: string;
  hex: string;
  tailwindClass: string;
  description: string;
  darkText: boolean;
  key?: string;
}

export default function ColorSwatch() {
  const swatches: SwatchProps[] = [
    {
      name: "Ink Black",
      variable: "--color-ink-black",
      hex: "#09090b",
      tailwindClass: "bg-ink-black",
      description: "Core backgrounds, primary headings, rich high-contrast dark text.",
      darkText: false,
    },
    {
      name: "Charcoal",
      variable: "--color-charcoal",
      hex: "#27272a",
      tailwindClass: "bg-charcoal",
      description: "Secondary dark elements, cards, dense borders, and dark metadata.",
      darkText: false,
    },
    {
      name: "Slate Gray",
      variable: "--color-slate-gray",
      hex: "#71717a",
      tailwindClass: "bg-slate-gray",
      description: "Muted captions, metadata, disabled states, and auxiliary text.",
      darkText: false,
    },
    {
      name: "Light Gray",
      variable: "--color-light-gray",
      hex: "#e4e4e7",
      tailwindClass: "bg-light-gray",
      description: "Structural divider lines, table headers, soft borders, and zebra-striping.",
      darkText: true,
    },
    {
      name: "Off-White",
      variable: "--color-off-white",
      hex: "#fafafa",
      tailwindClass: "bg-off-white",
      description: "Ambient light backgrounds, card surfaces, and spacious content pads.",
      darkText: true,
    },
    {
      name: "Pure White",
      variable: "--color-pure-white",
      hex: "#ffffff",
      tailwindClass: "bg-pure-white",
      description: "Crisp light surfaces, high-contrast text backing, absolute white.",
      darkText: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="color-swatch-grid">
      {swatches.map((swatch) => (
        <SwatchCard key={swatch.name} {...swatch} />
      ))}
    </div>
  );
}

function SwatchCard({ name, variable, hex, tailwindClass, description, darkText }: SwatchProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: "hex" | "class" | "var") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div
      id={`swatch-card-${name.toLowerCase().replace(/\s+/g, "-")}`}
      className="group flex flex-col border border-light-gray bg-pure-white transition-all duration-300 hover:shadow-lg"
    >
      {/* Visual Swatch Block */}
      <div
        className={`h-40 w-full relative flex flex-col justify-end p-4 transition-transform duration-300 ${tailwindClass} border-b border-light-gray`}
      >
        <span
          className={`text-xs font-mono uppercase tracking-wider ${
            darkText ? "text-ink-black/40" : "text-pure-white/40"
          }`}
        >
          Contrast Safe Preview
        </span>
        <h4
          className={`text-2xl font-display font-bold tracking-tight mt-1 ${
            darkText ? "text-ink-black" : "text-pure-white"
          }`}
        >
          {name}
        </h4>

        {/* Floating Quick Copy hex */}
        <button
          onClick={() => copyToClipboard(hex, "hex")}
          className={`absolute top-4 right-4 p-2 rounded-none border transition-all duration-200 ${
            darkText
              ? "border-ink-black/10 bg-pure-white/85 text-ink-black hover:bg-pure-white"
              : "border-pure-white/10 bg-ink-black/85 text-pure-white hover:bg-ink-black"
          }`}
          title="Copy HEX"
          id={`copy-hex-${name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {copied === "hex" ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>

      {/* Details Block */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-pure-white">
        <div>
          <p className="text-sm text-slate-gray leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Specs Table */}
        <div className="space-y-3 pt-4 border-t border-light-gray">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-gray">HEX</span>
            <button
              onClick={() => copyToClipboard(hex, "hex")}
              className="flex items-center gap-1.5 text-ink-black hover:text-slate-gray transition-colors"
            >
              <span>{hex}</span>
              {copied === "hex" ? <Check size={12} className="text-slate-gray" /> : <Copy size={12} />}
            </button>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-gray">Tailwind</span>
            <button
              onClick={() => copyToClipboard(tailwindClass, "class")}
              className="flex items-center gap-1.5 text-ink-black hover:text-slate-gray transition-colors"
            >
              <code className="bg-off-white px-1.5 py-0.5 rounded border border-light-gray">
                {tailwindClass}
              </code>
              {copied === "class" ? <Check size={12} className="text-slate-gray" /> : <Copy size={12} />}
            </button>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-gray">CSS Var</span>
            <button
              onClick={() => copyToClipboard(`var(${variable})`, "var")}
              className="flex items-center gap-1.5 text-ink-black hover:text-slate-gray transition-colors"
            >
              <code className="bg-off-white px-1.5 py-0.5 rounded border border-light-gray text-left max-w-[150px] truncate">
                {variable}
              </code>
              {copied === "var" ? <Check size={12} className="text-slate-gray" /> : <Copy size={12} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
