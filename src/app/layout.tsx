"use client";

import "./globals.css";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@/utils/theme'

export default function RootLayout({ children }: any) {

  return (
    <html>
      <head>
        {/* ios */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="PWA test" />
        <link rel="shortcut icon" sizes="152x152" href="/android-chrome-192x192.png" />
        <link rel="shortcut icon" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/android-chrome-512x512.png" />
        {/* <link rel="manifest" href="/site.webmanifest" />  Pc */}
        <link rel="manifest" href="/manifest.json" />   {/* 移动 */}
        <script src="/serviceWorkerRegister.js" async></script>
      </head>
      <body className={'max-h-screen w-full bg-gray-100 dark:bg-zinc-950'}>
        <ChakraProvider theme={theme}>
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
            {children}
          {/* <Updater /> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
