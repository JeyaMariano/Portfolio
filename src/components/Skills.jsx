import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

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
    <div className="bg-black text-center">
    <h3 className="text-5xl font-bold text-white">Skills</h3>
    <div className="flex justify-center items-center p-6 bg-black  shadow-lg"
    style={{
      backgroundImage: "url('https://gifdb.com/images/high/black-background-tuning-tecdf32yo7hfezz8.gif')", // Ensure it's inside `public/`
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <ResponsiveContainer width={400} height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Skills" dataKey="A" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default RadarChartComponent;
