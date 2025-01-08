import './globals.css';

export const metadata = {
  title: 'Aroya Cruises',
  description: 'Book your next cruise vacation with Aroya Cruises',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="mobileBG" style={{zoom:0.7}}>{children}</body>
    </html>
  );
}
