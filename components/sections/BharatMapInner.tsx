"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { TrendingUp } from "lucide-react";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const CITIES = [
  { name: "Indore", coords: [75.8577, 22.7196] as [number, number], startups: 42, state: "Madhya Pradesh", color: "#f59e0b" },
  { name: "Jaipur", coords: [75.7873, 26.9124] as [number, number], startups: 38, state: "Rajasthan", color: "#60a5fa" },
  { name: "Lucknow", coords: [80.9462, 26.8467] as [number, number], startups: 35, state: "Uttar Pradesh", color: "#34d399" },
  { name: "Surat", coords: [72.8311, 21.1702] as [number, number], startups: 29, state: "Gujarat", color: "#fb7185" },
  { name: "Coimbatore", coords: [76.9558, 11.0168] as [number, number], startups: 24, state: "Tamil Nadu", color: "#a78bfa" },
  { name: "Nagpur", coords: [79.0882, 21.1458] as [number, number], startups: 20, state: "Maharashtra", color: "#2dd4bf" },
  { name: "Bhopal", coords: [77.4126, 23.2599] as [number, number], startups: 18, state: "Madhya Pradesh", color: "#fb923c" },
  { name: "Vadodara", coords: [73.1812, 22.3072] as [number, number], startups: 15, state: "Gujarat", color: "#fbbf24" },
];

export default function BharatMapInner() {
  const [tooltip, setTooltip] = useState<(typeof CITIES)[0] | null>(null);

  return (
    <section
      id="map"
      className="py-28 relative overflow-hidden bg-[#07070a]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Bharat Startup Map
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Rising from <span className="text-[#f59e0b]">every corner</span> of Bharat
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/35 max-w-xl"
          >
            Innovation is not just a metro phenomenon. Karo Pitch is igniting
            talent in every district, every town, every village.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-4 relative overflow-hidden"
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [82.5, 22], scale: 900 }}
              style={{ width: "100%", height: "520px" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies
                    .filter((geo) => geo.properties.name === "India")
                    .map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: { fill: "rgba(245,158,11,0.06)", stroke: "rgba(245,158,11,0.2)", strokeWidth: 0.8, outline: "none" },
                          hover: { fill: "rgba(245,158,11,0.1)", stroke: "rgba(245,158,11,0.35)", strokeWidth: 1, outline: "none" },
                          pressed: { fill: "rgba(245,158,11,0.1)", outline: "none" },
                        }}
                      />
                    ))
                }
              </Geographies>

              {CITIES.map((city) => (
                <Marker
                  key={city.name}
                  coordinates={city.coords}
                  onMouseEnter={() => setTooltip(city)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  <circle r={12} fill={city.color} fillOpacity={0.08} stroke={city.color} strokeOpacity={0.2} strokeWidth={1} style={{ animation: "ping-slow 2.5s cubic-bezier(0,0,0.2,1) infinite" }} />
                  <circle r={5} fill={city.color} stroke="rgba(255,255,255,0.15)" strokeWidth={1.5} style={{ cursor: "pointer", filter: `drop-shadow(0 0 6px ${city.color})` }} />
                  <text textAnchor="middle" y={-12} style={{ fontSize: "9px", fill: "rgba(255,255,255,0.4)", fontFamily: "var(--font-geist-sans)", pointerEvents: "none" }}>
                    {city.name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>

            {tooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 left-6 rounded-xl p-3 pointer-events-none bg-[#0f0f14] border border-white/[0.08]"
              >
                <p className="text-sm font-semibold text-white">{tooltip.name}</p>
                <p className="text-xs text-white/30">{tooltip.state}</p>
                <p className="text-xs text-[#f59e0b] flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  {tooltip.startups} startups
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* City list */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-white/20 mb-2 px-1 uppercase tracking-wider font-medium">
              Active Startup Hubs
            </p>
            {CITIES.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onMouseEnter={() => setTooltip(city)}
                onMouseLeave={() => setTooltip(null)}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                  tooltip?.name === city.name
                    ? "border-[#f59e0b]/20 bg-[#f59e0b]/[0.03]"
                    : "border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08]"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${city.color}15` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: city.color, boxShadow: `0 0 8px ${city.color}` }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white/70">{city.name}</p>
                  <p className="text-xs text-white/20">{city.state}</p>
                </div>
                <span className="text-xs text-white/20 flex-shrink-0">{city.startups} startups</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
