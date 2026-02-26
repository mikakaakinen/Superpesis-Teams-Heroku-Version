const currentYear = new Date().getFullYear();
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      css={{
        textAlign: 'center',
        paddingTop: '0.75rem',
        paddingBottom: '0.5rem',
        fontFamily: 'Montserrat, sans-serif',
        backgroundColor: '#ffcb05',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <h3 css={{ maxWidth: '800px', margin: '0 auto' }}>
        © {currentYear} Made with
        <span style={{ color: '#ff0000' }}> &hearts;</span> in Finland <br />
        Tämä sivusto on epävirallinen Superpesikseen liittyvä harrastesivusto.
        Kuvat ja logot ovat lähinnä Wikipediasta. Niiden oikeudet löytyvät{' '}
        <Link
          css={{
            textDecoration: 'underline',
          }}
          to='/credits'
        >
          täältä
        </Link>
      </h3>
    </footer>
  );
};

export default Footer;
