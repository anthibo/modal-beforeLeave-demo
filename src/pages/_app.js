import '@/styles/globals.css';
import { Layout } from '@/components/Layout';
import { createContext, useState } from 'react';

export const ShowLeaveModalContext = createContext();

export default function App({ Component, pageProps }) {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  return (
    <ShowLeaveModalContext.Provider value={{showLeaveModal, setShowLeaveModal}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ShowLeaveModalContext.Provider>
  );
}
