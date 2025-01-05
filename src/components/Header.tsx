'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="header">
      <nav className="container">
        <ul>
          <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link href="/About" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link href="/Projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link href="/Skills" className={pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
          <li><Link href="/Contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}