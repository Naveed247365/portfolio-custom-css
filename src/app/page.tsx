import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="profile-picture animate-fade-in">
          <Image src="/profile.jpg" alt="Muhammad Naveed" width={200} height={200} className="rounded-full" />
        </div>
        <h1 className="animate-fade-in">Welcome to My Portfolio</h1>
        <p className="animate-fade-in-delay">Hi, I&apos;m Muhammad Naveed. I&apos;m a web developer passionate about creating beautiful and functional websites.</p>
        <div className="button-group animate-fade-in-delay">
          <Link href="/projects" className="cta-button">
            View My Work
          </Link>
          <a href="/path-to-your-cv.pdf" download className="cta-button secondary">
            Download CV
          </a>
        </div>
      </section>
    </div>
  )
}