(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BharatMapInner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Internship/karo-pitch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Internship/karo-pitch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Internship/karo-pitch/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Internship/karo-pitch/node_modules/react-simple-maps/dist/index.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Internship/karo-pitch/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Internship/karo-pitch/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const CITIES = [
    {
        name: "Indore",
        coords: [
            75.8577,
            22.7196
        ],
        startups: 42,
        state: "Madhya Pradesh",
        color: "#8b5cf6"
    },
    {
        name: "Jaipur",
        coords: [
            75.7873,
            26.9124
        ],
        startups: 38,
        state: "Rajasthan",
        color: "#3b82f6"
    },
    {
        name: "Lucknow",
        coords: [
            80.9462,
            26.8467
        ],
        startups: 35,
        state: "Uttar Pradesh",
        color: "#10b981"
    },
    {
        name: "Surat",
        coords: [
            72.8311,
            21.1702
        ],
        startups: 29,
        state: "Gujarat",
        color: "#f59e0b"
    },
    {
        name: "Coimbatore",
        coords: [
            76.9558,
            11.0168
        ],
        startups: 24,
        state: "Tamil Nadu",
        color: "#ef4444"
    },
    {
        name: "Nagpur",
        coords: [
            79.0882,
            21.1458
        ],
        startups: 20,
        state: "Maharashtra",
        color: "#06b6d4"
    },
    {
        name: "Bhopal",
        coords: [
            77.4126,
            23.2599
        ],
        startups: 18,
        state: "Madhya Pradesh",
        color: "#ec4899"
    },
    {
        name: "Vadodara",
        coords: [
            73.1812,
            22.3072
        ],
        startups: 15,
        state: "Gujarat",
        color: "#a78bfa"
    }
];
function BharatMapInner() {
    _s();
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "map",
        className: "py-24 relative overflow-hidden",
        style: {
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%), #09090b"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/20 text-xs text-indigo-300 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                "Bharat Startup Map"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.1
                            },
                            className: "text-4xl sm:text-5xl font-bold text-white mb-4",
                            children: [
                                "Rising from",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Every Corner"
                                }, void 0, false, {
                                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                " of Bharat"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.15
                            },
                            className: "text-slate-400 max-w-xl mx-auto",
                            children: "Innovation is not just a metro phenomenon. Karo Pitch is igniting talent in every district, every town, every village."
                        }, void 0, false, {
                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-[1fr_320px] gap-8 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.7
                            },
                            className: "glass rounded-3xl p-4 relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/5 rounded-3xl pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableMap"], {
                                    projection: "geoMercator",
                                    projectionConfig: {
                                        center: [
                                            82.5,
                                            22
                                        ],
                                        scale: 900
                                    },
                                    style: {
                                        width: "100%",
                                        height: "520px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geographies"], {
                                            geography: GEO_URL,
                                            children: ({ geographies })=>geographies.filter((geo)=>geo.properties.name === "India").map((geo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geography"], {
                                                        geography: geo,
                                                        style: {
                                                            default: {
                                                                fill: "rgba(99,102,241,0.12)",
                                                                stroke: "rgba(99,102,241,0.35)",
                                                                strokeWidth: 0.8,
                                                                outline: "none"
                                                            },
                                                            hover: {
                                                                fill: "rgba(139,92,246,0.18)",
                                                                stroke: "rgba(139,92,246,0.5)",
                                                                strokeWidth: 1,
                                                                outline: "none"
                                                            },
                                                            pressed: {
                                                                fill: "rgba(139,92,246,0.18)",
                                                                outline: "none"
                                                            }
                                                        }
                                                    }, geo.rsmKey, false, {
                                                        fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 23
                                                    }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        CITIES.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                                coordinates: city.coords,
                                                onMouseEnter: ()=>setTooltip(city),
                                                onMouseLeave: ()=>setTooltip(null),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: 12,
                                                        fill: city.color,
                                                        fillOpacity: 0.08,
                                                        stroke: city.color,
                                                        strokeOpacity: 0.2,
                                                        strokeWidth: 1,
                                                        style: {
                                                            animation: "ping-slow 2.5s cubic-bezier(0,0,0.2,1) infinite"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: 5,
                                                        fill: city.color,
                                                        stroke: "rgba(255,255,255,0.2)",
                                                        strokeWidth: 1.5,
                                                        style: {
                                                            cursor: "pointer",
                                                            filter: `drop-shadow(0 0 6px ${city.color})`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        textAnchor: "middle",
                                                        y: -12,
                                                        style: {
                                                            fontSize: "9px",
                                                            fill: "rgba(255,255,255,0.6)",
                                                            fontFamily: "var(--font-geist-sans)",
                                                            pointerEvents: "none"
                                                        },
                                                        children: city.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, city.name, true, {
                                                fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "absolute top-6 left-6 glass-strong rounded-xl p-3 pointer-events-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-white",
                                            children: tooltip.name
                                        }, void 0, false, {
                                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: tooltip.state
                                        }, void 0, false, {
                                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-violet-400 flex items-center gap-1 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                tooltip.startups,
                                                " startups"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 mb-2 px-1",
                                    children: "Active Startup Hubs"
                                }, void 0, false, {
                                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                CITIES.map((city, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: i * 0.07
                                        },
                                        onMouseEnter: ()=>setTooltip(city),
                                        onMouseLeave: ()=>setTooltip(null),
                                        className: `flex items-center gap-3 p-3 rounded-xl glass border transition-all duration-200 cursor-pointer ${tooltip?.name === city.name ? "border-violet-500/30 bg-violet-500/5" : "border-white/5 hover:border-white/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                                                style: {
                                                    background: `${city.color}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 rounded-full",
                                                    style: {
                                                        background: city.color,
                                                        boxShadow: `0 0 8px ${city.color}`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-slate-200",
                                                        children: city.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: city.state
                                                    }, void 0, false, {
                                                        fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Internship$2f$karo$2d$pitch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500 flex-shrink-0",
                                                children: [
                                                    city.startups,
                                                    " startups"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, city.name, true, {
                                        fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(BharatMapInner, "XaDrOWOd0VLN4F3dKO6gAHepmT8=");
_c = BharatMapInner;
var _c;
__turbopack_context__.k.register(_c, "BharatMapInner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Internship/karo-pitch/components/sections/BharatMapInner.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Internship_karo-pitch_components_sections_BharatMapInner_tsx_8d71ec72._.js.map