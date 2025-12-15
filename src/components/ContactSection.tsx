import { Linkedin, Github, Youtube, Mail, Send, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
          Let's Connect
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
          Looking for an AI consultant or want to collaborate on research? 
          I'm always open to discussing new projects and opportunities.
        </p>

        {/* Email and CV CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:tmr.almeida96@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium text-lg transition-all hover:shadow-lg hover:scale-105"
          >
            <Mail size={20} />
            tmr.almeida96@gmail.com
            <Send size={16} />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-full font-medium text-lg transition-all hover:bg-primary-foreground/20 hover:scale-105"
          >
            <FileText size={20} />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/tmralmeida/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-primary-foreground/10 rounded-full transition-all hover:bg-primary-foreground/20 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/tmralmeida"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-primary-foreground/10 rounded-full transition-all hover:bg-primary-foreground/20 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCHgNoBTKziGkMOW1lWwPGYw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-primary-foreground/10 rounded-full transition-all hover:bg-primary-foreground/20 hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>

        {/* Footer */}
        <p className="text-primary-foreground/50 text-sm mt-16">
          © {new Date().getFullYear()} Tiago R. de Almeida. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
