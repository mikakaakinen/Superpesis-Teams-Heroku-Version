import React from 'react';

const Header = () => {
  return (
    <header
      css={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcb05',
        padding: '1rem',
      }}
    >
      <h1
        css={{
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        SUPERPESISJOUKKUEET 2026
      </h1>
    </header>
  );
};

export default Header;
