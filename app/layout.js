import "./globals.css"

export const metadata={
  title:"The Veil",
  description:"Veil Record"
}

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}