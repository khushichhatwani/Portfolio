import React from "react";
import { Button } from "@/components/ui/MovingBorders"; // Gradient wrapper

const skills = [
  {
    title: "🌸 Programming & Frameworks",
    items: ["React Native", "React.js", "Next.js", "JavaScript (ES6+)", "Node.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "🧰 Tools & APIs",
    items: ["Axios", "Postman", "Firebase", "Mongoose", "MongoDB", "Stripe", "PayPal", "RESTful APIs", "Gemini AI", "Prisma", "Shadcn UI"],
  },
  {
    title: "🎨 Design & Optimization",
    items: ["Responsive UI/UX Design", "Debugging", "Performance Optimization", "Real-time Databases"],
  },
  {
    title: "📊 DSA (Data Structures & Algorithms)",
    items: ["Arrays", "Linked Lists", "Stacks", "Trees", "Graphs", "Sorting & Searching", "Queues"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-600">
          My <span className="text-indigo-600">Skills</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skill, idx) => (
          <Button
            key={idx}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-white border-neutral-200 dark:border-slate-800 w-full"
          >
            <div className="flex flex-col gap-4 p-6">
              <h2 className="text-lg font-semibold text-purple-300">{skill.title}</h2>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm text-white border border-white/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
}
