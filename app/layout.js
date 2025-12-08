import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata = {
  title: 'Dr. Evelin Iacomi | Psihiatru și Psihoterapeut',
  description: 'Cabinet de psihiatrie și psihoterapie. Consultații psihiatrice, tratament pentru anxietate, depresie și tulburări emoționale. Programează o consultație astăzi.',
  keywords: 'psihiatru, psihiatrie, psihoterapie, anxietate, depresie, sănătate mintală, consultație psihiatrică, Dr. Evelin Iacomi',
  authors: [{ name: 'Dr. Evelin Andreea Iacomi' }],
  openGraph: {
    title: 'Dr. Evelin Iacomi | Psihiatru și Psihoterapeut',
    description: 'Cabinet de psihiatrie și psihoterapie. Consultații psihiatrice, tratament pentru anxietate, depresie și tulburări emoționale.',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
