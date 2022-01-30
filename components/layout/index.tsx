import { FC } from 'react';
import Footer from '../footer'
import Meta from '../meta'
import Header from '../header';

const Layout: FC = ({ children }) => {
  return (
    <main className="flex flex-col m-auto min-h-screen px-8">
      <Meta />
      <Header/>
      <main className="grow shrink-0 m-auto py-8 prose dark:prose-invert prose-a:no-underline">
        {children}
      </main>
      <Footer />
    </main>
  )
}

export default Layout
