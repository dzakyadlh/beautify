import './reset.css';
import './globals.css';
import Provider from './provider';

export const metadata = {
  title: 'Beautify',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
