const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-heading text-center mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

        <div className="space-y-6 text-text-body text-lg leading-relaxed">
          <p>
            I am an AI/ML engineer driven by a passion for machine learning, data science, 
            computer vision, and robotics. Learning new topics within these areas is what 
            drives me and deploying them in real-world applications is just a plus.
          </p>
          <p>
            During my Master's degree, I worked on computer vision techniques for detecting 
            road lanes in autonomous vehicles. It was then that I first became interested in 
            deep learning. Encouraged by my supervisor's foresight, I immersed myself in the 
            field, taking machine learning courses and quickly finding myself drawn to the challenge.
          </p>
          <p>
            This path led me to pursue a <strong className="text-heading">PhD in human motion prediction</strong>, 
            in which I explored how deep learning models could predict movement patterns based on 
            contextual information derived from the agent and its trajectories. During this time, 
            I also completed a six-month internship at <strong className="text-heading">Amazon</strong>, 
            where I developed and deployed a Transformer-based system for real-time transit time 
            estimation across the EU logistics network.
          </p>
          <p>
            The journey is far from over. I'm still as curious and driven as ever, eager to 
            continue learning and pushing the boundaries of what AI can achieve in the real world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
