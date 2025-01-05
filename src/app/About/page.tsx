import Image from 'next/image'

export default function About() {
  return (
    <div className="container">
      <section className="about">
        <h1 className="section-title">About Me</h1>
        <div className="about-content">
          <div className="about-image animate-fade-in">
            <Image src="/profile.jpg" alt="Muhammad Naveed" width={400} height={400} className="rounded-lg" />
          </div>
          <div className="about-text animate-fade-in-delay">
            <p>Hello! I'm Muhammad Naveed, a passionate web developer with 2 years of experience in creating responsive and user-friendly web applications.</p>
            <p>My journey in web development started in 2023. Since then, I've been constantly learning and improving my skills to stay up-to-date with the latest technologies and best practices.</p>
            <p>I specialize in front-end development, React, Node.js, etc. My goal is to create web applications that not only look great but also provide an excellent user experience.</p>
            <p>When I'm not coding, you can find me playing video games or experimenting with new technologies.</p>
            <a href="/path-to-your-cv.pdf" download className="cta-button">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
