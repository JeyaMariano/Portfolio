import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "HTML", A: 80, fullMark: 100 },
  { subject: "CSS", A: 85, fullMark: 100 },
  { subject: "JavaScript", A: 80, fullMark: 100 },
  { subject: "React", A: 75, fullMark: 100 },
  { subject: "Tailwind", A: 75, fullMark: 100 },
  { subject: "Node.js", A: 70, fullMark: 100 },
];

const RadarChartComponent = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-black  text-center text-white"
    >
      <h3 className="text-5xl font-bold mb-10">Skills</h3>

      <div className="flex justify-center items-center">
        <div className="bg-blue-950/40 p-6 rounded-2xl shadow-2xl border border-blue-800 backdrop-blur-sm">
          <ResponsiveContainer width={400} height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#3B82F6" />
              <PolarAngleAxis dataKey="subject" stroke="#E0E7FF" />
              <PolarRadiusAxis stroke="#E0E7FF" />
              <Radar
                name="Skills"
                dataKey="A"
                stroke="#60A5FA"
                fill="#3B82F6"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default RadarChartComponent;
