import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import type { PilarScore } from "@/lib/blinda/scoring";

export function PillarRadar({ pilares, corPrimaria }: { pilares: PilarScore[]; corPrimaria: string }) {
  const data = pilares.map((p) => ({
    pilar: p.nome.split(" ")[0],
    valor: p.percentual,
  }));

  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius="75%">
          <PolarGrid stroke="#BFAE9A" strokeOpacity={0.35} />
          <PolarAngleAxis
            dataKey="pilar"
            tick={{ fill: "#3D312A", fontSize: 12, fontFamily: "Georgia, serif" }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: "#8a7a6c", fontSize: 10 }}
            tickCount={5}
            stroke="#BFAE9A"
            strokeOpacity={0.35}
          />
          <Radar
            dataKey="valor"
            stroke={corPrimaria}
            fill={corPrimaria}
            fillOpacity={0.35}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}