import { Briefcase, GraduationCap, Building2 } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "AI Consultant",
    company: "Freelance",
    period: "Present",
    description:
      "Working as an independent AI consultant, helping organizations leverage machine learning and AI technologies to solve complex real-world challenges. Specializing in computer vision, deep learning, and scalable ML systems.",
    highlight: true,
  },
  {
    icon: GraduationCap,
    title: "PhD in AI & Machine Learning",
    company: "Human Motion Prediction",
    period: "Completed",
    description:
      "Explored how deep learning models could predict movement patterns based on contextual information derived from agents and their trajectories. Published research at top venues including ICCV, IEEE RA-L, and ITSC.",
    highlight: true,
  },
  {
    icon: Building2,
    title: "Applied Scientist Intern",
    company: "Amazon",
    period: "6 months",
    description:
      "Developed and deployed a Transformer-based system for real-time transit time estimation across the EU logistics network. Strengthened ability to build scalable ML systems for production use.",
    highlight: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-heading text-center mb-4">
          Experience
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 mt-2" />

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`p-6 bg-card rounded-xl shadow-card transition-all hover:shadow-hover ${
                      exp.highlight ? "ring-2 ring-accent/20" : ""
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <exp.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-accent">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-heading mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                    <p className="text-text-body">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
