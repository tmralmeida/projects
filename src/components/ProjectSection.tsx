import { useState, Fragment } from "react";
import { Brain, Gamepad2, Droplets, Code2, ScanLine, ExternalLink, ArrowRight, Calendar, Box } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectVideo {
  embedUrl: string;
  title: string;
}

interface Project {
  icon: typeof Brain;
  title: string;
  date: string;
  description: string;
  tags: string[];
  fullDescription: string;
  links: ProjectLink[];
  images?: ProjectImage[];
  videos?: ProjectVideo[];
}

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/tmralmeida/projects/master/images/projects";

const projects: Project[] = [
  {
    icon: Box,
    title: "AI Consultant P1: SnapMade",
    date: "June 2025",
    description:
      "Built an Edge AI MVP that transforms 2D images into 3D-printable meshes using NVIDIA Jetson AGX Orin, enabling local generative AI processing without cloud dependency.",
    tags: ["Edge AI", "NVIDIA Jetson", "3D Printing", "Generative AI"],
    fullDescription: `Have you ever looked at a photo and wished you could reach in and hold the object? That's the reality now with **SnapMade**.

I teamed up with a Portuguese startup (**Viridius Technology**) to do something fun: take massive, state-of-the-art 3D generative AI and squeeze it into a box that sits on your desk. Using the **NVIDIA Jetson AGX Orin**, I built an MVP that transforms a 2D image into a fully watertight, **3D-printable mesh** in minutes.

**The SnapMade Workflow:**

📸 **Snap/upload** a picture of anything
🧠 The **Jetson transforms** the image into a textured 3D mesh locally - no server required
🎁 The 3D mesh is saved to the cloud via **Supabase** and is ready to be sent straight to a 3D printer
🚚 Your **3D masterpiece** will be delivered to your home!

**Technical Challenges:**

Wrangling such complex AI models onto **ARM64 architecture** was quite the "character-building" experience. Deploying state-of-the-art generative models on edge devices requires careful optimization of memory usage, model quantization, and efficient inference pipelines.

**Key Achievements:**

• Successfully deployed large-scale **3D generative AI** models on edge hardware
• Built end-to-end pipeline from image capture to **3D-printable output**
• Integrated cloud storage with **Supabase** for seamless mesh delivery
• Optimized for **real-time local processing** without cloud dependency

This project demonstrates the potential of **Edge AI** for bringing powerful generative capabilities directly to consumer devices, enabling new applications in personalized manufacturing and creative tools.`,
    links: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/tmralmeida_edgeai-nvidia-jetsonorin-activity-7405175349464018945-qB3I" },
    ],
    videos: [
      { embedUrl: "https://www.youtube.com/embed/l_lTA-kgXgg", title: "SnapMade Demo - Image to 3D Mesh" },
    ],
  },
  {
    icon: Brain,
    title: "PhD: Trajectory Prediction",
    date: "October 2020 - September 2025",
    description:
      "Explored how deep learning models can predict movement patterns of heterogeneous agents in dynamic environments, contributing to safer robot navigation.",
    tags: ["Deep Learning", "Computer Vision", "Robotics"],
    fullDescription: `Robots and intelligent systems navigating dynamic environments must predict the intentions of surrounding agents to ensure safe and efficient operation. Trajectory prediction, which captures these intentions through motion patterns, is particularly challenging due to the highly diverse context of motion, expressed in agent-specific and environment cues. Despite this, many current prediction methods focus on homogeneous datasets, limiting their applicability in heterogeneous real-world scenarios.

This thesis addresses motion heterogeneity by introducing the concept of **trajectory classes**, which group data samples based on shared characteristics, either observable (e.g., agent type, activity) or learned from the data itself. These classes are priors for effectively modeling diverse behaviors.

**1. THÖR-MAGNI Dataset**

**THÖR-MAGNI** came to fill a gap in motion trajectories datasets. The data collection is designed around systematic variation of environmental factors to allow building cue-conditioned models of human motion and verifying hypotheses on factor impact. We propose 5 scenarios in which participants, in addition to primary navigation, need to move objects, interact with each other and the robot, and respond to remote instructions.

The dataset includes differential and omnidirectional robot navigation, semantic zones, direction signs in the environment, and many other aspects. We provide position and head orientation for each moving agent, as well as 3D lidar scans and gaze tracking. In total, THÖR-MAGNI captures **3.5 hours of motion** of **40 participants** over **5 days** of recording.

**Learning Outcome:** The observable classes in THÖR-MAGNI underlying the human roles demonstrate distinct motion patterns that could be important for trajectory prediction in robotics environments.

**2. Class-Conditioned Trajectory Prediction**

Building on the THÖR-MAGNI data collection, we propose **deep learning methods for class-conditioned trajectory prediction**. We also analyze these methods in data settings of particular interest to robotics and autonomous driving: (1) class imbalancing and (2) low data regimes (i.e., non-uniform class distributions).

The proposed models follow an encoder-decoder structure where the encoder processes the observed tracklet and the decoder generates the future trajectory. We studied LSTMs and Transformers as encoders and incorporate an embedding layer to process the observable class information.

**Learning Outcome:** Maps of Dynamics approaches have an edge over deep generative methods in imbalanced data scenarios and over single-output deep learning methods in low-data regimes. Observable classes may be ambiguous representations of underlying motion patterns, as they are not solely tied to trajectory cues.

**3. THÖR-MAGNI Act: Fine-Grained Actions**

To overcome some of the limitations of observable classes, we introduce **fine-grained action annotations in THÖR-MAGNI**, resulting in the **THÖR-MAGNI Act** dataset containing **8.3 hours** of fine-grained actions aligned with motion cues.

The dataset contains **14 unique actions**: Walk, DrawCard, ObserveCardDraw, WalkLO, PickBucket, WalkBucket, DeliverBucket, PickBox, WalkBox, DeliverBox, PickStorageBin, WalkStorageBin, DeliverStorageBin, HRI.

**Learning Outcome:** Actions can enhance trajectory prediction by mitigating some of the ambiguity present in observable classes.

**4. Self-Conditioned GAN (SC-GAN)**

To overcome limitations of observable classes, we propose learning **data-driven trajectory classes**, which depend solely on trajectory cues. We found that clusters based solely on the future or the complete trajectory are the most suitable for trajectory prediction.

We propose a novel **Self-Conditioned GAN (SC-GAN)** to learn trajectory clusters aligned with generative modeling objectives. This framework assumes that the representations learned in the discriminator's feature space are more suitable for clustering than the raw trajectory data.

Another advantage is that SC-GAN can generate diverse trajectory samples by conditioning the generator on different clusters, helping avoid mode collapse in traditional GANs.

**Learning Outcome:** Full- and future-driven clusters are the most suitable for trajectory prediction. Self-conditioned GAN is a powerful clustering method connecting the clustering and the trajectory prediction objectives.

**5. Multi-Stage Prediction Framework**

Based on these insights, we propose using the clusters learned by SC-GAN to implicitly improve the performance of trajectory predictors in heterogeneous data settings. We also propose a **multi-stage prediction framework** that explicitly conditions trajectory predictions on data-driven clusters.

**Learning Outcome:** SC-GAN can help mitigating the mode collapse problem in GAN-based trajectory forecasters. The multi-stage prediction framework effectively leverages data-driven clusters to enhance trajectory prediction accuracy.`,
    links: [
      { label: "PhD Thesis", url: "https://oru.diva-portal.org/smash/record.jsf?pid=diva2%3A1985105&dswid=2862" },
      { label: "THÖR-MAGNI Paper", url: "https://journals.sagepub.com/doi/full/10.1177/02783649241274794" },
      { label: "THÖR-MAGNI Act Paper", url: "https://ieeexplore.ieee.org/abstract/document/10973897/" },
      { label: "Class-Conditioned Prediction", url: "https://ieeexplore.ieee.org/abstract/document/10545544" },
      { label: "Self-Conditioned GAN", url: "https://ieeexplore.ieee.org/abstract/document/10069775" },
      { label: "Multi-stage Framework", url: "https://ieeexplore.ieee.org/abstract/document/10422479" },
      { label: "MAGNI Dashboard Tool", url: "https://github.com/tmralmeida/magni-dash" },
      { label: "THÖR-MAGNI Tools", url: "https://github.com/tmralmeida/thor-magni-tools" },
      { label: "Dataset Download", url: "https://zenodo.org/records/13865754" },
    ],
    images: [
      { src: `${GITHUB_RAW_BASE}/phd/high_level_introduction.png`, alt: "PhD Main Concepts", caption: "High-level overview of thesis contributions" },
      { src: `${GITHUB_RAW_BASE}/phd/thor-magni.gif`, alt: "THÖR-MAGNI data collection", caption: "THÖR-MAGNI data collection in action" },
      { src: `${GITHUB_RAW_BASE}/phd/thor-magni-scenarios.jpg`, alt: "THÖR-MAGNI scenarios overview", caption: "THÖR-MAGNI scenarios overview" },
      { src: `${GITHUB_RAW_BASE}/phd/ral_models.png`, alt: "Deep learning models", caption: "Proposed deep learning models for class-conditioned prediction" },
      { src: `${GITHUB_RAW_BASE}/phd/ral_model_selection.png`, alt: "Model selection decision tree", caption: "Model selection decision tree based on data characteristics" },
      { src: `${GITHUB_RAW_BASE}/phd/thor-magni-act-sample.gif`, alt: "THÖR-MAGNI Act sample", caption: "THÖR-MAGNI Act fine-grained action annotations" },
      { src: `${GITHUB_RAW_BASE}/phd/thor-magni-act-stats.png`, alt: "Motion cues statistics", caption: "Motion cues statistics across actions" },
      { src: `${GITHUB_RAW_BASE}/phd/thor-magni-act-models.png`, alt: "Action-conditioned models", caption: "Action-conditioned and multi-task prediction models" },
      { src: `${GITHUB_RAW_BASE}/phd/thor-magni-act-preds.png`, alt: "Predictions comparison", caption: "Prediction results comparison" },
      { src: `${GITHUB_RAW_BASE}/phd/conditioned_predictions.png`, alt: "Conditioned predictions", caption: "Predictions conditioned on clusters from different trajectory segments" },
      { src: `${GITHUB_RAW_BASE}/phd/scgan.png`, alt: "Self-Conditioned GAN architecture", caption: "Self-Conditioned GAN (SC-GAN) architecture" },
      { src: `${GITHUB_RAW_BASE}/phd/mode_collapse.png`, alt: "Mode collapse comparison", caption: "Traditional GAN (left) vs SC-GAN diverse samples (right)" },
      { src: `${GITHUB_RAW_BASE}/phd/data_driven_prediction.png`, alt: "Data-driven prediction approaches", caption: "Data-driven classes for trajectory prediction" },
      { src: `${GITHUB_RAW_BASE}/phd/implicit_preds.png`, alt: "Penalized predictions", caption: "Predictions from penalized prediction systems vs baseline" },
      { src: `${GITHUB_RAW_BASE}/phd/multi_stage_framework.png`, alt: "Multi-stage framework", caption: "Multi-stage prediction framework" },
    ],
  },
  {
    icon: Gamepad2,
    title: "Reinforcement Learning Studies",
    date: "January - April 2021",
    description:
      "Playground projects exploring reinforcement learning to train agents in various environments and game scenarios.",
    tags: ["RL", "OpenAI Gym", "PyTorch"],
    fullDescription: `Similarly to what I have done with the studies for Deep Learning, here I present my **Reinforcement Learning studies**. It comprises some playground projects where I use reinforcement learning to train agents to accomplish some behavior required from a given task within a given environment.

**1. Context**

The whole idea is that we make an agent interact with an environment and learn from it. That environment can be a game, a robot, or even a real-world problem. The idea is that such environment is able to return a **reward** to the agent, which is the feedback that the agent receives from its actions.

The agent's goal is to **maximize the reward** it receives from the environment. The agent learns by trial and error, exploring the environment and trying different actions to see what works best. To that end, the agent's goal is to learn a **policy** that maps states to actions, so it can take the best action in each state.

To make the problem easier to solve, neural networks can be used to approximate the policy. In that case, **Deep Reinforcement Learning** emerges as the research topic to study.

**2. Learning Path**

Everything started by the study of the **Sutton and Barto's book** on Reinforcement Learning. Then, I attended the free recorded lectures of **Hado van Hasselt**, who follows the same book but provides deeper and insightful explanations of some of the examples.

I defend the principle of learning by doing. In this way, I have watched the full Reinforcement Learning course from **deeplizard**. Finally, I followed the **Spinning Up documentation** from OpenAI, which I strongly suggest for those who aim to learn Deep Reinforcement Learning.

**3. Implementations (PyTorch)**

This Deep RL library of algorithms is an ongoing project. At this time there is the CartPole environment solved by the following implementations:

• **Vanilla Policy Gradient (REINFORCE)**
• **Deep Q-Network (DQN)**
• **Advantage Actor-Critic (A3C)**

During my experiments I have implemented both default states and images observations. I could not make it for the A3C due to the limitation of the render provided by OpenAI.

I also had the opportunity of using one of these RL frameworks in one of the courses I took during my Ph.D. Therefore, I was asked to develop a **vacuum cleaner AI-based agent** whose goal is to clean a grid world environment. In this environment, the AI-based agent may encounter obstacles and dirty cells. I trained **REINFORCE** to solve this problem.`,
    links: [
      { label: "Deep RL Repository", url: "https://github.com/tmralmeida/road2-rl/tree/main/deep-rl" },
      { label: "Vacuum Cleaner AI Project", url: "https://github.com/tmralmeida/wasp-AI-ML-m1" },
      { label: "Sutton & Barto Book", url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf" },
      { label: "deeplizard Course", url: "https://deeplizard.com/learn/playlist/PLZbbT5o_s2xoWNVdDudn51XM8lOuZ_Njv" },
      { label: "Spinning Up Docs", url: "https://spinningup.openai.com/en/latest/index.html" },
    ],
  },
  {
    icon: Droplets,
    title: "Smart Shower MVP",
    date: "July - September 2020",
    description:
      "A homemade IoT project emulating a smart hands-free shower using Raspberry Pi, computer vision, and servo motors.",
    tags: ["IoT", "Raspberry Pi", "OpenCV"],
    fullDescription: `This is a homemade project that emulates a **smart hands-free shower/tap**. This POC is based on a low-cost prototype composed of a **Raspberry Pi 3b+**, a picamera, an ultrasonic sensor, 3 LEDs, and a servo motor.

**1. Motivation**

At the time of publication of this idea, there are difficult times in the world due to **Coronavirus**. This virus is characterized by being difficult to control due to its easy spread. Therefore, the idea behind this smart system is **reducing the spread of diseases** such as Coronavirus in public bathing facilities through totally hands-free and intelligent showers and taps.

**2. The Idea**

There are a lot of hands-free taps and showers but I have never seen one that could control the flow and temperature of water smartly and intuitively. Hence, the objective here is to control both **flow and temperature** by the location of the hands in relation to the tap.

It is as if we placed an **XY-plane coordinate system** in front of the tap sensor:
• **X-axis (horizontal):** Controls temperature - more to the right means hotter water
• **Y-axis (vertical):** Controls flow - higher above the tap means higher flow

**3. How It Works**

According to the workflow diagram, the Raspberry Pi and Arduino are always in communication. Therefore, Arduino continuously sends the distance to the Raspberry Pi until it is less than 15cm. At this point, one hand is in front of the sensor, which triggers the camera.

Then the Raspberry Pi computes the code that corresponds to the hand location. This code is sent to the Arduino that yields the respective outputs to each electronic device (LEDs and motor).

**System Components:**
• **Motor 80** = closed tap
• **Motor 10** = fully open tap
• **Motor 45** = partly open tap
• **Yellow LED** = mild water
• **Blue LED** = cold water
• **Red LED** = hot water

The final system would be composed of a 3D ultrasonic sensor that in this prototype is represented by the usage of a simple ultrasonic and a camera.`,
    links: [
      { label: "GitHub Repository", url: "https://github.com/tmralmeida/smart-shower" },
    ],
    images: [
      { src: `${GITHUB_RAW_BASE}/smart-shower/fluxo.png`, alt: "Smart Shower Workflow", caption: "Application workflow diagram" },
    ],
    videos: [
      { embedUrl: "https://www.youtube.com/embed/jOX66OmSYe4", title: "Smart Shower Demo" },
    ],
  },
  {
    icon: Code2,
    title: "Deep Learning Guide",
    date: "March - July 2020",
    description:
      "A comprehensive guide covering TensorFlow and PyTorch techniques for training image classification and object detection models.",
    tags: ["TensorFlow", "PyTorch", "Tutorial"],
    fullDescription: `This is a guide for **Deep Learning practitioners**. It covers TensorFlow and PyTorch techniques to train the best-known models for **Image Classification** and **Object Detection** fields.

At the beginning of my journey of learning this topic in practice, the most difficult thing for me was filtering out all the information, because every practitioner has one repository and it seems that they have results but their code is too complex for a beginner.

Therefore, I started with a **TensorFlow Specialization** and as I was learning, I was doing my test cases for myself. In my opinion, the easiest way to start is with Image Classification because it does not resort as much effort as the other fields.

**1. Image Classification (TensorFlow)**

I started to download one dataset (**CINIC10**), then I tried to replicate the models training through the respective papers (from **AlexNet** to **MobileNet**). The code is not the most efficient one but it was done by a beginner so I hope that it is clear enough.

There are three global ways to deploy a TensorFlow model:
• **Sequential API:** For straightforward models (AlexNet, ZFNet, VGG16)
• **Functional API:** For models with layers concatenation and parallel operations (ResNet18, GoogLeNet, Xception, MobileNet)
• **Model subclassing:** For fully-customizable forward propagation

**Key Historical Points:**
• **AlexNet** is the first CNN that obtained a quite important result in the ImageNet challenge
• **ZFNet** showed how it would be possible to improve the network's layout by visualizing what is going on inside of it
• **VGG16** showed that deeper CNNs can be more accurate than shallower networks
• **ResNet** showed how to train deep neural networks using residual blocks with skip connections

**2. Object Detection (PyTorch)**

The opportunity of working also in Object Detection arose in my work. I attended the **deeplizard** course about PyTorch because I wanted to know all the decent possibilities in terms of Deep Learning frameworks.

I studied the **BDD100K** dataset, composed of 10 different classes: bus, light, sign, person, bike, truck, motor, car, train, and rider.

**Architectures studied:**
• **Faster R-CNN** with MobileNetV2 backbone - High accuracy, best for detecting small and large objects
• **SSD512** - Single shot detection with MobileNetV2 backbone
• **YOLOv4** - High-speed predictions, deployed on **Nvidia Jetson AGX Xavier**

All models were evaluated using **COCO metrics** and tested on real-world **Aveiro road footage**.`,
    links: [
      { label: "Image Classification Notebooks", url: "https://github.com/tmralmeida/bag-of-models/tree/master/CNNs/1-Image_Classification" },
      { label: "Object Detection Scripts", url: "https://github.com/tmralmeida/bag-of-models/tree/master/CNNs/2-Object_Detection/scripts" },
      { label: "TensorRT YOLOv4 Demo", url: "https://github.com/tmralmeida/tensorrt-yolov4" },
      { label: "TensorFlow Specialization", url: "https://www.coursera.org/specializations/tensorflow-in-practice" },
      { label: "deeplizard PyTorch Course", url: "https://deeplizard.com/learn/video/v5cngxo4mIg" },
      { label: "BDD100K Dataset", url: "https://bair.berkeley.edu/blog/2018/05/30/bdd/" },
    ],
    images: [
      { src: `${GITHUB_RAW_BASE}/bag-of-models/classification/resblock.png`, alt: "ResNet residual block", caption: "ResNet residual block with skip connections (from Dive Into Deep Learning)" },
    ],
    videos: [
      { embedUrl: "https://www.youtube.com/embed/o7KSFDoEfW0", title: "Faster R-CNN Demo on Aveiro Roads" },
      { embedUrl: "https://www.youtube.com/embed/DGnp-dfRaXU", title: "SSD512 Demo on Aveiro Roads" },
      { embedUrl: "https://www.youtube.com/embed/63p3GyR8JPw", title: "YOLOv4 on Nvidia Jetson AGX Xavier" },
    ],
  },
  {
    icon: ScanLine,
    title: "Data Matrix Detection",
    date: "March 2020",
    description:
      "Implemented Faster R-CNN model to detect Data Matrix codes in unstructured environments with high accuracy.",
    tags: ["Object Detection", "Faster R-CNN", "Industry"],
    fullDescription: `This work presents an implementation of a **Faster R-CNN** model to detect Data Matrix codes. This architecture demonstrated quite accurate and consistent results by detecting almost all landmarks throughout the test set.

It arose during my research work at **University of Aveiro, Portugal**. In this project, I went through every step of training a deep neural network: data collection (images of this type of landmarks in different environments); data labeling through the **Labelbox app**; then, the Faster R-CNN model was trained and evaluated through the **Detectron2 platform**.

**Advice:** For those who don't have much time to design the architecture, this kind of platforms is totally worth it.

**1. Dataset Creation**

The dataset is one of the most important pieces of the overall Machine Learning solution, since each decision of the model is based on a previous training, which is performed on that data. Therefore, if the training procedure has been compromised, then the inference quality of the model will be worse.

We labeled correctly **156 training frames** and **224 test images**. This distribution is not the most common or correct one. However, the number of class objects to detect is just one, and although it is a small patch of the image, it is a pretty distinguishable object from the rest of the image.

**Training Set Environments:**
• A common laboratory room with several objects spread around
• A workshop with machinery

**Test Set Environments:**
• A hallway
• A different part of the workshop used in the training set

**2. Why Faster R-CNN?**

We decided to use this architecture because:
• Very performant detecting **small patches** of the image
• The system where this neural network would be used (an **Automated Guided Vehicle**) does not move at high speeds, so the high-latency disadvantage of a proposal network would not be a problem

It is also worth mentioning that when you are at the phase of choosing which Machine Learning approach to use, you have to take into account the practical application where you are working at (**Deep Learning is sometimes overkill** for some applications, Machine Learning is much more than just Deep Learning).

**3. Training with Detectron2**

The training procedure of a deep neural network can be divided into 3 main steps: **data loading**, **forward propagation**, and **back propagation**. The first step implied registering our dataset in the dataset catalog of Detectron2. Detectron2 makes everything by us, we just need to know how to use their API and choose some hyperparameters such as: batch size, learning rate, and the number of iterations.`,
    links: [
      { label: "GitHub Notebook", url: "https://github.com/tmralmeida/faster-rcnn-data-matrix/blob/master/faster-rcnn-data-matrix.ipynb" },
      { label: "Detectron2", url: "https://github.com/facebookresearch/detectron2" },
      { label: "Labelbox", url: "https://labelbox.com/" },
    ],
    images: [
      { src: `${GITHUB_RAW_BASE}/faster-data-matrix/train1.png`, alt: "Training sample 1", caption: "Training sample: Manufacturing facility environment" },
      { src: `${GITHUB_RAW_BASE}/faster-data-matrix/train2.png`, alt: "Training sample 2", caption: "Training sample: Visually cluttered laboratory room" },
      { src: `${GITHUB_RAW_BASE}/faster-data-matrix/test1.png`, alt: "Test sample 1", caption: "Test sample: Cluttered workshop environment" },
      { src: `${GITHUB_RAW_BASE}/faster-data-matrix/test2.png`, alt: "Test sample 2", caption: "Test sample: Neat hallway environment" },
      { src: `${GITHUB_RAW_BASE}/faster-data-matrix/results.png`, alt: "Detection results", caption: "Detection results on test set" },
    ],
  },
];

// Helper function to render text with bold formatting
const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-heading">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-heading text-center mb-4">
          Projects
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group p-6 bg-card rounded-xl shadow-card transition-all hover:shadow-hover hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4 transition-colors group-hover:bg-accent/20">
                <project.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-heading mb-1">{project.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3 h-3" />
                {project.date}
              </div>
              <p className="text-text-body text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <div className="flex items-center gap-3">
              {selectedProject && (
                <div className="p-2 bg-accent/10 rounded-lg">
                  <selectedProject.icon className="w-5 h-5 text-accent" />
                </div>
              )}
              <div>
                <DialogTitle className="text-xl">{selectedProject?.title}</DialogTitle>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                  <Calendar className="w-3 h-3" />
                  {selectedProject?.date}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {selectedProject?.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6">
              {/* Formatted Description */}
              <div className="text-text-body text-sm leading-relaxed">
                {selectedProject?.fullDescription.split("\n").map((paragraph, idx) => (
                  <p key={idx} className={paragraph.trim() === "" ? "h-3" : "mb-3"}>
                    {renderFormattedText(paragraph)}
                  </p>
                ))}
              </div>

              {/* Images */}
              {selectedProject?.images && selectedProject.images.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-heading">Figures</h4>
                  <div className="grid gap-4">
                    {selectedProject.images.map((image, idx) => (
                      <figure key={idx} className="space-y-2">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full rounded-lg border border-border"
                          loading="lazy"
                        />
                        {image.caption && (
                          <figcaption className="text-xs text-muted-foreground text-center italic">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {selectedProject?.videos && selectedProject.videos.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-heading">Videos</h4>
                  <div className="grid gap-4">
                    {selectedProject.videos.map((video, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="aspect-video rounded-lg overflow-hidden border border-border">
                          <iframe
                            width="100%"
                            height="100%"
                            src={video.embedUrl}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground text-center italic">{video.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Links */}
          {selectedProject && selectedProject.links.length > 0 && (
            <div className="border-t pt-4 mt-2">
              <h4 className="text-sm font-semibold text-heading mb-3">Links & Resources</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
