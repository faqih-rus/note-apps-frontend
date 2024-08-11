'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from '@apollo/client';
import client from '../app/graphql/client';
import theme from '../app/styles/theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
