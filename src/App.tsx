import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import graphqlClient from './graphql/client';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <div className="container mx-auto px-4">
        <header className="py-6 mb-8">
          <h1 className="font-bold text-black text-4xl">
            SpaceX Land
          </h1>
        </header>
        <HomePage />
      </div>
    </ApolloProvider>
  );
}

export default App;
