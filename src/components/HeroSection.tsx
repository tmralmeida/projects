import profileImage from "@/assets/profile.jpg";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="animate-fade-up">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-hover ring-4 ring-secondary">
                <img
                  src={profileImage}
                  alt="Tiago R. de Almeida"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground text-lg">🤖</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="animate-fade-up text-accent font-medium tracking-wide uppercase text-sm mb-3">
              AI/ML Specialist
            </p>
            <h1 className="animate-fade-up animation-delay-100 font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-heading leading-tight mb-6">
              Tiago R. de Almeida
            </h1>
            <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-text-body leading-relaxed mb-8 max-w-2xl">
              PhD in AI & Machine Learning, specializing in computer vision, trajectory prediction, and deep learning. 
              Currently working as an AI/ML Applied Scientist for Adidas in 3D generative AI.
            </p>

            {/* Social Links */}
            <div className="animate-fade-up animation-delay-300 flex items-center justify-center md:justify-start gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/tmralmeida/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-heading transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/tmralmeida"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-heading transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:tmr.almeida96@gmail.com"
                className="p-3 bg-secondary rounded-full text-heading transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA */}
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="animate-fade-up animation-delay-400 inline-flex items-center gap-2 text-text-body hover:text-heading transition-colors group"
            >
              <span>Learn more about me</span>
              <ArrowDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
