import { link } from 'fs'
import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Website",
    description: "A UI/UX e-commerce solution with Next.js, and Tailwind CSS.",
    image: "/ecom.png",
    link: "https://multi-page-website-tailwind-css-indol.vercel.app/"
  },
  {
    title: "E-Commerce UI/UX Hackathon Project",
    description: "A UI/UX e-commerce Hackathon project with Next.js, and Tailwind CSS.",
    image: "/ecom2.png",
    link: "https://ecommerce-naveed.vercel.app/"
  },
  {
    title: "Resume Builder",
    description: "A resume builder with html, css and js.",
    image: "/resume.png",
    link: "https://resume-cv-builder-rouge.vercel.app/"
  }
]

export default function Projects() {
  return (
    <div className="container">
      <section className="projects">
        <h1 className="section-title">My Projects</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-fade-in-delay">
              <Image src={project.image} alt={project.title} width={300} height={200} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}