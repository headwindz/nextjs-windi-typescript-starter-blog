import { FC } from 'react';
import Footer from '../footer';
import Meta from '../meta';
import Header from '../header';

const Layout: FC = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen px-8">
      <Meta />
      <Header />
      <main className="flex-grow mx-auto py-8 prose w-full">{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
