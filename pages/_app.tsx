import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = pageProps.isWide ? '' : 'sm';
  });
  return <Component {...pageProps} />
}
