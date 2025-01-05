import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
