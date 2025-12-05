import './globals.css'

export const metadata = {
  title: 'Dr. Cabinet Psihiatrie | Îngrijire pentru Sănătatea Mintală',
  description: 'Cabinet de psihiatrie și psihoterapie. Consultații psihiatrice, tratament pentru anxietate, depresie și tulburări emoționale. Programează o consultație astăzi.',
  keywords: 'psihiatru, psihiatrie, psihoterapie, anxietate, depresie, sănătate mintală, consultație psihiatrică',
  authors: [{ name: 'Cabinet Psihiatrie' }],
  openGraph: {
    title: 'Dr. Cabinet Psihiatrie | Îngrijire pentru Sănătatea Mintală',
    description: 'Cabinet de psihiatrie și psihoterapie. Consultații psihiatrice, tratament pentru anxietate, depresie și tulburări emoționale.',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
