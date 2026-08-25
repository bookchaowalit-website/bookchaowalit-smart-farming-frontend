"use client";

import { useMemo, useState } from "react";

type Crop = { id: string; name: string; bed: string; window: string; water: string; soil: string; note: string; tasks: string[] };
const crops: Crop[] = [
  { id: "okra", name: "Okra", bed: "South bed / row 03", window: "May — August", water: "Moderate", soil: "Loose, warm loam", note: "Pick often; the bed rewards a regular pass more than a large harvest day.", tasks: ["Check first true leaves", "Mulch the south edge", "Harvest pods before they harden", "Save two mature pods"] },
  { id: "basil", name: "Thai basil", bed: "Kitchen bed / row 01", window: "All year", water: "Light / frequent", soil: "Drained, composted", note: "Pinch the flower tops before the plant spends its energy on seed.", tasks: ["Pinch flower tips", "Cut above a leaf pair", "Refresh compost ring", "Dry a small seed envelope"] },
  { id: "morning-glory", name: "Morning glory", bed: "Wet edge / row 05", window: "June — October", water: "High", soil: "Moist, rich silt", note: "A fast crop for a wet corner; give the stems a place to climb before they ask.", tasks: ["Set a low trellis", "Keep the wet edge open", "Cut a morning bundle", "Inspect the underside of leaves"] },
];

export default function Home() {
  const [cropId, setCropId] = useState("okra");
  const [week, setWeek] = useState(2);
  const crop = crops.find((item) => item.id === cropId) ?? crops[0];
  const weekLabel = useMemo(() => ["Prepare", "Set out", "Establish", "Train", "Harvest", "Close"], []);

  return (
    <main className="fieldbook-page">
      <div className="fieldbook-shell">
        <header className="fieldbook-header"><div className="fieldbook-brand"><span className="seed-mark">✳</span><span>FIELD / BOOK</span></div><span>BED 03 · SMALLHOLDER EDITION</span><span className="fieldbook-date">08.25 / 2026</span></header>
        <section className="fieldbook-hero"><div><p className="fieldbook-kicker">read the field before the calendar</p><h1>Work with<br /><em>the season.</em></h1><p className="fieldbook-deck">A quiet fieldbook for choosing one crop, locating its window, and turning a broad growing season into the next useful visit.</p></div><div className="weather-slip"><span>FIELD CONDITIONS</span><strong>Warm / after rain</strong><small>synthetic observation<br />no sensor connected</small></div></section>

        <section className="crop-shelf" aria-label="Crop index"><div className="shelf-heading"><span>THE CROP SHELF</span><span>Choose one bed to read</span></div><div className="crop-tabs">{crops.map((item, index) => <button key={item.id} type="button" className={item.id === crop.id ? "is-active" : ""} onClick={() => { setCropId(item.id); setWeek(0); }}><span>0{index + 1}</span><strong>{item.name}</strong><small>{item.bed}</small></button>)}</div></section>

        <section className="field-reading" aria-labelledby="field-title"><div className="reading-copy"><p className="fieldbook-kicker">CURRENT READING / {crop.bed}</p><h2 id="field-title">{crop.name}<br /><em>needs a rhythm.</em></h2><p>{crop.note}</p><div className="field-facts"><div><span>GROWING WINDOW</span><strong>{crop.window}</strong></div><div><span>WATER NOTE</span><strong>{crop.water}</strong></div><div><span>SOIL</span><strong>{crop.soil}</strong></div></div></div><div className="field-diagram" aria-label={`${crop.name} bed diagram`}><div className="sun-disc" /><div className="bed-line line-one" /><div className="bed-line line-two" /><div className="plant plant-one"><i /><i /><i /></div><div className="plant plant-two"><i /><i /></div><span className="diagram-label label-top">MORNING SIDE</span><span className="diagram-label label-bottom">WET EDGE / KEEP OPEN</span></div></section>

        <section className="week-plan" aria-labelledby="week-title"><div className="plan-heading"><div><p className="fieldbook-kicker">VISIT PLAN / SIX WEEKS</p><h2 id="week-title">One next action.</h2></div><p>Tap the row to see what this stage asks of the grower.</p></div><div className="week-rail">{weekLabel.map((label, index) => <button key={label} type="button" className={week === index ? "is-active" : ""} onClick={() => setWeek(index)}><span>W{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong></button>)}</div><div className="task-note"><span>THIS WEEK / {weekLabel[week].toUpperCase()}</span><p>{crop.tasks[week]}</p><button type="button" onClick={() => setWeek((value) => Math.min(value + 1, weekLabel.length - 1))} disabled={week === weekLabel.length - 1}>Mark the next visit →</button></div></section>
        <footer className="fieldbook-footer"><span>BOOKCHAOWALIT / SMART FARMING FIELDBOOK</span><span>ILLUSTRATIVE CROP NOTES · NOT AGRONOMIC ADVICE</span></footer>
      </div>
    </main>
  );
}
