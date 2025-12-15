import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "PhD: Learning to Understand and Predict Heterogeneous Trajectory Data",
    venue: "Doctoral Thesis",
    year: "",
    authors: "",
    pdfUrl: "https://tmralmeida.github.io/projects/papers/phd_final_version.pdf",
    isPhD: true,
  },
  {
    title: "THÖR-MAGNI Act: Actions for Human Motion Modeling in Robot-Shared Industrial Spaces",
    venue: "IEEE/ACM HRI '25",
    year: "2025",
    authors: "Tiago Rodrigues de Almeida, et al.",
    pdfUrl: "https://arxiv.org/abs/2412.13729",
  },
  {
    title: "Trajectory Prediction for Heterogeneous Agents: A Performance Analysis on Small and Imbalanced Datasets",
    venue: "IEEE Robotics and Automation Letters",
    year: "2024",
    authors: "Tiago Rodrigues de Almeida, Yufei Zhu, et al.",
    pdfUrl: "https://ieeexplore.ieee.org/abstract/document/10545544",
  },
  {
    title: "THÖR-Magni: Deep Learning Models for Role-Conditioned Human Motion Prediction",
    venue: "IEEE/CVF ICCV Workshops",
    year: "2023",
    authors: "Tiago Rodrigues de Almeida, Andrey Rudenko, et al.",
    pdfUrl: "https://openaccess.thecvf.com/content/ICCV2023W/JRDB/papers/de_Almeida_THOR-Magni_Comparative_Analysis_of_Deep_Learning_Models_for_Role-Conditioned_Human_ICCVW_2023_paper.pdf",
  },
  {
    title: "Likely, Light, and Accurate Context-Free Clusters-based Trajectory Prediction",
    venue: "IEEE ITSC",
    year: "2023",
    authors: "Tiago Rodrigues de Almeida, Oscar Martinez Mozos",
    pdfUrl: "https://arxiv.org/abs/2307.14788",
  },
  {
    title: "Context-free Self-Conditioned GAN for Trajectory Forecasting",
    venue: "IEEE ICMLA",
    year: "2022",
    authors: "Tiago Rodrigues de Almeida, Eduardo Gutierrez Maestro, Oscar Martinez Mozos",
    pdfUrl: "https://ieeexplore.ieee.org/abstract/document/10069775",
  },
  {
    title: "Road detection based on simultaneous deep learning approaches",
    venue: "Robotics and Autonomous Systems",
    year: "2020",
    authors: "Tiago Almeida, Bernardo Lourenço, Vitor Santos",
    pdfUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0921889020304450",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-heading text-center mb-4">
          Publications
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-5 bg-card rounded-xl shadow-card transition-all hover:shadow-hover ${
                pub.isPhD ? "ring-2 ring-accent/30 bg-accent/5" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-lg shrink-0 mt-1">
                  <FileText className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-heading font-medium group-hover:text-accent transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {pub.authors && (
                    <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-medium px-2 py-1 bg-secondary rounded text-muted-foreground">
                      {pub.venue}
                    </span>
                    {pub.year && (
                      <span className="text-xs text-muted-foreground">{pub.year}</span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          View all publications on{" "}
          <a
            href="https://scholar.google.com/citations?user=ORMNS9kAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Google Scholar
          </a>
        </p>
      </div>
    </section>
  );
};

export default PublicationsSection;
