import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from '@emotion/react';
import App from './App.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Credits from './Credits.jsx';
import './index.css';
import 'antd/dist/reset.css';

// Luo linkki backendille samaan domainiin
const link = new HttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
});

// Luo Apollo Client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,
          fontFamily: 'Inter, serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          minHeight: '100vh',
        },
        code: {
          fontFamily:
            "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
        },
        h1: {
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          marginTop: '0.67rem',
          marginBottom: '0.67rem',
          marginLeft: 0,
          marginRight: 0,
          fontFamily: "'Montserrat', system-ui, sans-serif",
          fontWeight: 700,
          letterSpacing: '0.02em',
        },
        h2: {
          fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
          marginTop: '0.77rem',
          marginBottom: '0.77rem',
          marginLeft: 0,
          marginRight: 0,
          fontFamily: "'Montserrat', system-ui, sans-serif",
          fontWeight: 700,
          letterSpacing: '0.02em',
        },
        h3: {
          fontSize: 'clamp(0.9rem, 3.5vw, 1.17rem)',
          marginTop: '0.87rem',
          marginBottom: '0.87rem',
          marginLeft: 0,
          marginRight: 0,
          fontFamily: "'Montserrat', system-ui, sans-serif",
          fontWeight: 700,
          letterSpacing: '0.02em',
        },
        p: {
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          marginTop: '1rem',
          marginBottom: '1rem',
          marginLeft: 0,
          marginRight: 0,
          fontFamily: 'Inter, serif',
        },
        img: {
          width: '100%',
          maxWidth: '100%',
          height: 'auto',
        },
      }}
    />
    <ApolloProvider client={client}>
      <ToastContainer position='top-right' autoClose={5000} />
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/credits' element={<Credits />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
);
