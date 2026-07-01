import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CZGZtZnR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BG = "#0B1220";
var PANEL = "#101a2e";
var INK = "#F4EFE6";
var MUTED = "#9AA7BD";
var GOLD = "#E6B566";
var GOLD_SOFT = "#F2D38A";
var LINE = "rgba(244,239,230,0.12)";
var SERIF = "'Playfair Display', Georgia, serif";
var SANS = "'Inter', system-ui, sans-serif";
function Kicker({ children, size = 20 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			color: GOLD,
			fontSize: size,
			letterSpacing: "0.32em",
			fontWeight: 500,
			textTransform: "uppercase",
			fontFamily: SANS
		},
		children
	});
}
function Title({ children, size = 80 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		style: {
			fontFamily: SERIF,
			fontWeight: 700,
			fontSize: size,
			lineHeight: 1.1,
			letterSpacing: "-0.02em",
			color: INK,
			margin: 0
		},
		children
	});
}
function Body({ children, size = 26, color = INK, maxWidth = 1500 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		style: {
			fontFamily: SANS,
			fontWeight: 400,
			fontSize: size,
			lineHeight: 1.6,
			color,
			maxWidth,
			margin: 0
		},
		children
	});
}
function GoldRule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		width: 96,
		height: 3,
		background: GOLD,
		borderRadius: 2
	} });
}
function SlideShell({ children, align = "start", paddingX = 140, paddingY = 120 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			width: "100%",
			minHeight: 1080,
			padding: `${paddingY}px ${paddingX}px`,
			display: "flex",
			flexDirection: "column",
			justifyContent: align === "center" ? "center" : "flex-start",
			gap: 44,
			boxSizing: "border-box"
		},
		children
	});
}
var slides = [
	{
		id: "cover",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
			align: "center",
			paddingX: 180,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "MC0003 · A Story" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					style: {
						fontFamily: SERIF,
						fontWeight: 900,
						fontSize: 132,
						lineHeight: 1.05,
						color: INK,
						margin: 0,
						letterSpacing: "-0.03em"
					},
					children: [
						"In Uncertainty,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								color: GOLD,
								fontStyle: "italic"
							},
							children: "Drive Certainty"
						}),
						" Through Science."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 32,
						alignItems: "center",
						marginTop: 16
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						width: 64,
						height: 2,
						background: GOLD
					} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
						size: 26,
						color: MUTED,
						children: "A governance-meeting retrospective · The road to MC0003's endorsement"
					})]
				})
			]
		})
	},
	{
		id: "context",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The Context" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "Pressure going into the second governance meeting" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Body, {
				size: 32,
				maxWidth: 1500,
				children: [
					"In the first meeting we proposed ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: GOLD_SOFT },
						children: "three projects"
					}),
					", but none were explicitly endorsed.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"So the second meeting had to produce a decision —",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: GOLD_SOFT },
						children: "we walked in carrying real pressure"
					}),
					"."
				]
			})
		] })
	},
	{
		id: "why-mdg",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 1 · Preparation" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
				size: 70,
				children: "Why molecular glue degraders (MGDs)?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr",
					gap: 28,
					marginTop: 8
				},
				children: [
					{
						h: "Patient access & adherence",
						p: "Oral small molecules keep gaining momentum, avoiding ADA-style issues seen with biologics."
					},
					{
						h: "What degraders unlock",
						p: "Address inhibitor resistance and reach activities beyond the kinase domain."
					},
					{
						h: "An internal gap at Merck",
						p: "Our MGD portfolio is thin — a meaningful white space worth filling."
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: PANEL,
						border: `1px solid ${LINE}`,
						borderRadius: 18,
						padding: "36px 32px",
						display: "flex",
						flexDirection: "column",
						gap: 16,
						minHeight: 280
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							color: GOLD,
							fontSize: 22,
							fontWeight: 600,
							fontFamily: SANS
						},
						children: c.h
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
						size: 22,
						color: MUTED,
						children: c.p
					})]
				}, c.h))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
				size: 22,
				color: MUTED,
				maxWidth: 1500,
				children: "Coming from a biologics background, I learned on the fly how to evaluate small molecules and MGDs — how to spot differentiation and manage risk."
			})
		] })
	},
	{
		id: "from-117-to-49",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 1 · Preparation" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
				size: 72,
				children: "From 117 pages to 49"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: 56,
					marginTop: 16
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { textAlign: "center" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontFamily: SERIF,
								fontSize: 180,
								color: INK,
								lineHeight: 1,
								fontWeight: 900
							},
							children: "117"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: { marginTop: 16 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
								size: 24,
								color: MUTED,
								children: "First review draft"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							fontSize: 64,
							color: GOLD
						},
						children: "→"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { textAlign: "center" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontFamily: SERIF,
								fontSize: 180,
								color: GOLD,
								lineHeight: 1,
								fontWeight: 900
							},
							children: "49"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: { marginTop: 16 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
								size: 24,
								color: MUTED,
								children: "Final version after ZQ's comments (42 data pages)"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: { flex: 1 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Body, {
							size: 24,
							maxWidth: 680,
							children: [
								"On top of five projects with completed deep dives, ten more high-level projects were folded in along the way.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: GOLD_SOFT },
									children: "Only six days from lock to meeting"
								}),
								" — yet every chart in the original 117 pages could be talked through from memory, without the slide on screen."
							]
						})
					})
				]
			})
		] })
	},
	{
		id: "challenge",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 2 · In the Meeting" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
				size: 76,
				children: "Like ordering from a menu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 40,
					marginTop: 8
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: PANEL,
						border: `1px solid ${LINE}`,
						borderRadius: 18,
						padding: "40px 36px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							color: GOLD,
							fontSize: 22,
							marginBottom: 16,
							fontFamily: SANS
						},
						children: "5 main projects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							fontSize: 56,
							color: INK,
							fontFamily: SERIF,
							fontWeight: 700
						},
						children: ["10–15", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 26,
								color: MUTED,
								marginLeft: 10,
								fontFamily: SANS
							},
							children: "min each"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: PANEL,
						border: `1px solid ${LINE}`,
						borderRadius: 18,
						padding: "40px 36px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							color: GOLD,
							fontSize: 22,
							marginBottom: 16,
							fontFamily: SANS
						},
						children: "10 high-level projects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							fontSize: 56,
							color: INK,
							fontFamily: SERIF,
							fontWeight: 700
						},
						children: ["5", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 26,
								color: MUTED,
								marginLeft: 10,
								fontFamily: SANS
							},
							children: "min each · only if the committee was curious"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
				size: 24,
				color: MUTED,
				maxWidth: 1500,
				children: "Every sentence had to be weighed. Discussions ran long. By the back half of the meeting, HQ leaders were tired — for unfamiliar targets, there was barely any energy left to dig in."
			})
		] })
	},
	{
		id: "decision",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
			align: "center",
			paddingX: 200,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 2 · The Call I Made" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						fontFamily: SERIF,
						fontWeight: 900,
						fontSize: 100,
						lineHeight: 1.1,
						color: INK,
						margin: 0,
						letterSpacing: "-0.02em"
					},
					children: [
						"Stop layering detail.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Land the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								color: GOLD,
								fontStyle: "italic"
							},
							children: "decisive scientific point"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"in the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								color: GOLD,
								fontStyle: "italic"
							},
							children: "fewest words possible"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
					size: 26,
					color: MUTED,
					maxWidth: 1300,
					children: "\"Nothing to lose — let's go.\" I switched into active-recommendation mode and used precise scientific framing to pull the room back to what actually mattered."
				})
			]
		})
	},
	{
		id: "five-points",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
			paddingX: 100,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 2 · I got 5 sentences. Here they are." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
					size: 56,
					children: "Each sentence mapped to a key decision dimension"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(5, 1fr)",
						gap: 18,
						marginTop: 8
					},
					children: [
						{
							n: "01",
							tag: "Innovation",
							t: "A new MGD platform",
							p: "Mechanistically sound and capable of generating new targets — platform value, not a one-off."
						},
						{
							n: "02",
							tag: "China advantage",
							t: "China-prevalent cancers + pan-tumor potential",
							p: "Strong efficacy already shown — not a concept, but backed by data."
						},
						{
							n: "03",
							tag: "Differentiation",
							t: "Novel or multi-MOA",
							p: "Scientifically more differentiated, and likelier to create long-term value."
						},
						{
							n: "04",
							tag: "Risk in check",
							t: "Acceptable selectivity & safety",
							p: "Always the must-answer question for whether a project can move forward."
						},
						{
							n: "05",
							tag: "Asset stage",
							t: "IND already submitted",
							p: "Neither too early nor too late — right in the sweet spot to advance."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							background: PANEL,
							border: `1px solid ${LINE}`,
							borderTop: `3px solid ${GOLD}`,
							borderRadius: 14,
							padding: "26px 20px",
							display: "flex",
							flexDirection: "column",
							gap: 12,
							minHeight: 440
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									color: GOLD,
									fontSize: 16,
									letterSpacing: "0.22em",
									fontFamily: SANS
								},
								children: c.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									color: MUTED,
									fontSize: 16,
									fontFamily: SANS
								},
								children: c.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontFamily: SERIF,
									fontSize: 26,
									color: INK,
									fontWeight: 700,
									lineHeight: 1.25
								},
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
								height: 1,
								background: LINE
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
								size: 18,
								color: MUTED,
								children: c.p
							})
						]
					}, c.n))
				})
			]
		})
	},
	{
		id: "reaction",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
			align: "center",
			paddingX: 200,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 2 · The Reaction" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						fontFamily: SERIF,
						fontWeight: 700,
						fontSize: 82,
						lineHeight: 1.15,
						color: INK,
						margin: 0
					},
					children: [
						"Even with a tired room,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"those few sentences",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								color: GOLD,
								fontStyle: "italic"
							},
							children: "put the project's core value back on the table"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						background: PANEL,
						border: `1px solid ${LINE}`,
						borderLeft: `4px solid ${GOLD}`,
						borderRadius: 12,
						padding: "32px 40px",
						maxWidth: 1300
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Body, {
						size: 26,
						children: [
							"On-the-spot decision: “Have ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: GOLD_SOFT },
								children: "Johnny"
							}),
							" in Chemistry review it; if no major issue, proceed”"
						]
					})
				})
			]
		})
	},
	{
		id: "post-meeting",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 3 · After the Meeting" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
				size: 72,
				children: "The closer you get to a yes, the more careful you have to be"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 36,
					marginTop: 12
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: PANEL,
						border: `1px solid ${LINE}`,
						borderRadius: 18,
						padding: "36px 32px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							color: GOLD,
							fontSize: 20,
							marginBottom: 14,
							fontFamily: SANS
						},
						children: "Dr. Kou's U.S. trip"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
						size: 24,
						children: "Met with Johnny in person to make sure chemistry was solid."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: PANEL,
						border: `1px solid ${LINE}`,
						borderRadius: 18,
						padding: "36px 32px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							color: GOLD,
							fontSize: 20,
							marginBottom: 14,
							fontFamily: SANS
						},
						children: "What I prepared"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
						size: 24,
						children: "A detailed data deck with annotated speaker notes to deepen the case for the asset."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					marginTop: 4,
					padding: "26px 36px",
					border: `1px solid ${GOLD}`,
					borderRadius: 14,
					display: "inline-flex",
					alignSelf: "flex-start"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
					size: 28,
					color: GOLD_SOFT,
					children: "✓ Endorsement secured."
				})
			})
		] })
	},
	{
		id: "exec-rigor",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 4 · After the Endorsement" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
				size: 68,
				children: "Getting endorsed was only step one"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Body, {
				size: 28,
				maxWidth: 1500,
				children: [
					"Push for results, but",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: GOLD_SOFT },
						children: "never let go of scientific rigor"
					}),
					". The deep-dive process stays — it's the core of how we control risk."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
					gap: 18,
					marginTop: 12
				},
				children: [
					"Physicochemical properties",
					"In vitro / in vivo efficacy models",
					"PK / PD",
					"Clinical study design"
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: PANEL,
						border: `1px solid ${LINE}`,
						borderRadius: 14,
						padding: "28px 24px",
						minHeight: 200
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							color: GOLD,
							fontSize: 16,
							letterSpacing: "0.22em",
							fontFamily: SANS
						},
						children: ["STEP ", String(i + 1).padStart(2, "0")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginTop: 18,
							fontFamily: SERIF,
							fontSize: 24,
							color: INK,
							fontWeight: 700,
							lineHeight: 1.3
						},
						children: t
					})]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
				size: 20,
				color: MUTED,
				maxWidth: 1500,
				children: "With a new MOA — new to most of the team — I ran 1:1 alignments with every function to settle the overall strategy."
			})
		] })
	},
	{
		id: "exec-validation",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 4 · The Validation Work" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
				size: 62,
				children: "Every point tested whether we could really stand on the science"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 24,
					marginTop: 12
				},
				children: [
					{
						t: "Ternary-complex affinity assay",
						p: "The pivotal evidence for a new MOA — the method itself had to be refined repeatedly."
					},
					{
						t: "Efficacy only visible in 3D models",
						p: "Harder readout, but far closer to real biology."
					},
					{
						t: "Choosing the right in vitro model",
						p: "Model choice determines how interpretable every downstream dataset becomes."
					},
					{
						t: "Defining the efficacy readout",
						p: "Not just \"does it work\" — but \"how do we measure that it works\"."
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: PANEL,
						border: `1px solid ${LINE}`,
						borderRadius: 16,
						padding: "30px 32px",
						display: "flex",
						gap: 22,
						alignItems: "flex-start"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						width: 10,
						height: 10,
						borderRadius: 999,
						background: GOLD,
						marginTop: 16,
						flexShrink: 0
					} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 10
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontFamily: SERIF,
								fontSize: 28,
								color: INK,
								fontWeight: 700
							},
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
							size: 20,
							color: MUTED,
							children: c.p
						})]
					})]
				}, c.t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
				size: 20,
				color: MUTED,
				maxWidth: 1500,
				children: "Validation isn't repetition — it's looking across a wider surface for risks the original data may have hidden."
			})
		] })
	},
	{
		id: "summary",
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
			paddingX: 140,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Part 5 · The Takeaway" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
					size: 68,
					children: "What scientific leadership really means"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldRule, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: 24,
						marginTop: 12
					},
					children: [
						{
							n: "01",
							t: "Identify the decisive scientific dimensions",
							p: "In uncertain environments, quickly see which few things actually matter."
						},
						{
							n: "02",
							t: "Move stakeholders with concise framing",
							p: "Influence judgment with precision — don't just transmit information."
						},
						{
							n: "03",
							t: "Hold the line on scientific rigor",
							p: "Drive outcomes without ever giving up deep-dives and disciplined risk control."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							background: PANEL,
							border: `1px solid ${LINE}`,
							borderRadius: 18,
							padding: "36px 32px",
							minHeight: 320,
							display: "flex",
							flexDirection: "column",
							gap: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontFamily: SERIF,
									fontSize: 60,
									color: GOLD,
									fontWeight: 900,
									lineHeight: 1
								},
								children: c.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontFamily: SERIF,
									fontSize: 28,
									color: INK,
									fontWeight: 700,
									lineHeight: 1.3
								},
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
								size: 20,
								color: MUTED,
								children: c.p
							})
						]
					}, c.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						marginTop: 24,
						padding: "32px 40px",
						borderLeft: `4px solid ${GOLD}`,
						background: "rgba(230,181,102,0.06)",
						borderRadius: 8
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							fontFamily: SERIF,
							fontSize: 44,
							color: INK,
							fontWeight: 700,
							lineHeight: 1.3,
							fontStyle: "italic"
						},
						children: ["In uncertainty, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: GOLD },
							children: "drive certainty through science."
						})]
					})
				})
			]
		})
	}
];
function useScale() {
	const [scale, setScale] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		const fit = () => {
			setScale(Math.min(1, window.innerWidth / 1920));
		};
		fit();
		window.addEventListener("resize", fit);
		return () => window.removeEventListener("resize", fit);
	}, []);
	return scale;
}
function StoryDeck() {
	const total = slides.length;
	const [index, setIndex] = (0, import_react.useState)(0);
	const scale = useScale();
	(0, import_react.useEffect)(() => {
		const fromHash = () => {
			const m = /^#(\d+)$/.exec(window.location.hash);
			if (m) setIndex(Math.max(1, Math.min(total, parseInt(m[1], 10))) - 1);
		};
		fromHash();
		window.addEventListener("hashchange", fromHash);
		return () => window.removeEventListener("hashchange", fromHash);
	}, [total]);
	const go = (0, import_react.useCallback)((next) => {
		const n = Math.max(0, Math.min(total - 1, next));
		setIndex(n);
		if (typeof window !== "undefined") history.replaceState(null, "", `#${n + 1}`);
	}, [total]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight") {
				e.preventDefault();
				go(index + 1);
			} else if (e.key === "ArrowLeft") {
				e.preventDefault();
				go(index - 1);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		index,
		go,
		total
	]);
	const slide = slides[index];
	const progress = (0, import_react.useMemo)(() => (index + 1) / total * 100, [index, total]);
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "auto"
		});
	}, [index]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			minHeight: "100vh",
			width: "100%",
			background: BG,
			color: INK,
			position: "relative",
			fontFamily: SANS
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "fixed",
				top: 0,
				left: 0,
				height: 3,
				width: `${progress}%`,
				background: GOLD,
				transition: "width 360ms ease",
				zIndex: 50
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "relative",
					width: "100%",
					minHeight: "100vh",
					display: "flex",
					justifyContent: "center",
					overflowX: "hidden"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						width: 1920,
						minHeight: 1080,
						position: "relative",
						background: BG,
						zoom: scale
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							position: "absolute",
							inset: 0,
							backgroundImage: "radial-gradient(1100px 700px at 88% 12%, rgba(230,181,102,0.10), transparent 60%), radial-gradient(900px 600px at 8% 92%, rgba(72,120,200,0.12), transparent 60%)",
							pointerEvents: "none"
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								position: "absolute",
								top: 56,
								right: 64,
								color: MUTED,
								fontSize: 18,
								letterSpacing: "0.28em",
								fontVariantNumeric: "tabular-nums",
								fontFamily: SANS
							},
							children: [
								String(index + 1).padStart(2, "0"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: GOLD },
									children: "/"
								}),
								" ",
								String(total).padStart(2, "0")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								position: "relative",
								animation: "slideIn 480ms cubic-bezier(.2,.7,.2,1)"
							},
							children: slide.render()
						}, slide.id)
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "fixed",
					bottom: 28,
					left: "50%",
					transform: "translateX(-50%)",
					display: "flex",
					alignItems: "center",
					gap: 14,
					background: "rgba(16,26,46,0.85)",
					border: `1px solid ${LINE}`,
					borderRadius: 999,
					padding: "10px 14px",
					backdropFilter: "blur(10px)",
					zIndex: 40
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
						onClick: () => go(index - 1),
						disabled: index === 0,
						label: "← Prev"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							color: MUTED,
							fontSize: 13,
							letterSpacing: "0.2em",
							padding: "0 10px",
							fontVariantNumeric: "tabular-nums",
							fontFamily: SANS
						},
						children: [
							index + 1,
							" / ",
							total
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
						onClick: () => go(index + 1),
						disabled: index === total - 1,
						label: "Next →"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "fixed",
					bottom: 28,
					right: 28,
					color: MUTED,
					fontSize: 12,
					letterSpacing: "0.22em",
					opacity: .6,
					fontFamily: SANS
				},
				children: "← → to navigate"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html, body { background: ${BG}; }
      ` })
		]
	});
}
function NavBtn({ onClick, disabled, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		disabled,
		style: {
			background: disabled ? "transparent" : GOLD,
			color: disabled ? MUTED : "#0B1220",
			border: disabled ? `1px solid ${LINE}` : "none",
			borderRadius: 999,
			padding: "10px 22px",
			fontSize: 13,
			fontWeight: 600,
			letterSpacing: "0.08em",
			cursor: disabled ? "not-allowed" : "pointer",
			fontFamily: SANS,
			transition: "transform 120ms ease"
		},
		children: label
	});
}
//#endregion
export { StoryDeck as component };
