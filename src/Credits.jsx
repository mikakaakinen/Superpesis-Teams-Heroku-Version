/** @jsxImportSource @emotion/react */
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;
import { Link } from 'react-router-dom';

const Credits = () => {
  return (
    <Layout
      css={{
        backgroundColor: '#ececec',
        minHeight: '100vh',
      }}
    >
      <Link
        to='/'
        css={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1000,
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          fontWeight: 700,
          fontFamily: "'Inter', serif",
          color: '#fff',
          backgroundColor: '#2563eb',
          textDecoration: 'none',
          borderRadius: '4px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          '&:hover': {
            backgroundColor: '#1e4fd6',
          },
          '&:focus-visible': {
            outline: '2px solid #93c5fd',
            outlineOffset: '2px',
          },
        }}
      >
        Takaisin
      </Link>
      <Content>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h1
              css={{
                textDecoration: 'underline',
                margin: '1.5rem 0 1rem 0',
              }}
            >
              Oikeudet
            </h1>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Alajärven Ankkurit
            </h2>
            <p>Logo: Ankkuritpesis, lisensoitu CC BY-SA 4.0 </p>
            <p>Stadion: Santeri Viinamäki, lisensoitu CC BY 3.0 </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Hyvinkään Tahko
            </h2>
            <p>
              Logo: Hyvinkään Tahko, lupa käyttöön saatu Tahkon
              seurajohdolta{' '}
            </p>
            <p>
              Stadion: Hyvinkään Tahko, lupa käyttöön saatu Tahkon seurajohdolta
            </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Imatran Pallo-Veikot
            </h2>
            <p>Logo: ChatGTP:n luoma </p>
            <p>Stadion: Pixabay/alessandra1barbieri </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Joensuun Maila
            </h2>
            <p>
              Logo: Joensuun Maila, lupa käyttöön saatu Mailan
              seurajohdolta{' '}
            </p>
            <p>
              Stadion: Joensuun Maila, lupa käyttöön saatu Mailan
              seurajohdolta{' '}
            </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Kempeleen Kiri
            </h2>
            <p>
              Logo: Kempeleen Kiri, lupa käyttöön saatu Kirin seurajohdolta{' '}
            </p>
            <p>
              Stadion: Kempeleen Kiri, lupa käyttöön saatu Kirin seurajohdolta
            </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Kiteen Pallo
            </h2>
            <p>Logo: Kiteen Pallo, lupa käyttöön saatu Kiteen seurajohdolta </p>
            <p>
              Stadion: Kiteen Pallo, lupa käyttöön saatu Kiteen seurajohdolta
            </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Koskenkorvan Urheilijat
            </h2>
            <p>Logo: ChatGTP:n luoma </p>
            <p>Stadion: Mädsen, lisensoitu CC BY 3.0</p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Kouvolan Pallonlyöjät
            </h2>
            <p>Logo: ChatGTP:n luoma </p>
            <p>Stadion: Tolppa2024, lisensoitu CC BY-SA 4.0</p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Manse PP
            </h2>
            <p>Logo: ChatGTP:n luoma </p>
            <p>Stadion: Pihamies, lisensoitu CC BY-SA 4.0</p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Pattijoen Urheilijat
            </h2>
            <p>Logo: ChatGTP:n luoma </p>
            <p>Stadion: Pixabay/alessandra1barbieri</p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Sotkamon Jymy
            </h2>
            <p>Logo: Wikipedia, lisensoitu Public Domain </p>
            <p>Stadion: Otto Karikoski, lisensoitu CC BY-SA 4.0</p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.0rem 0 0.3rem 0',
              }}
            >
              Vimpelin Veto
            </h2>
            <p>Logo: Wikipedia, lisensoitu CC BY-SA 4.0 </p>
            <p>Stadion: Pyhajumbo, lisensoitu CC BY-SA 2.5</p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col style={{ textAlign: 'center' }}>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '0.75rem 0 0.75rem 0',
              }}
            >
              Linkit lisensseihin
            </h2>
            <a
              css={{
                display: 'block',
                fontSize: '1.25rem',
                marginBottom: '10px',
                color: ' #0066cc',
                transition: 'border-bottom 0.2s ease',
                borderBottom: '2px solid transparent',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  color: '#1e40af', // tummempi hoverissa
                  borderBottom: '2px solid #0066cc',
                },
                '&:focus-visible': {
                  outline: '3px solid #ffcc00',
                  outlineOffset: '2px',
                  backgroundColor: '#fff9e6',
                  borderBottom: '2px solid #0066cc',
                },
              }}
              href='https://creativecommons.org/licenses/by-sa/2.5/'
            >
              CC BY-SA 2.5{' '}
            </a>
            <a
              css={{
                display: 'block',
                fontSize: '1.25rem',
                marginBottom: '10px',
                color: ' #0066cc',
                transition: 'border-bottom 0.2s ease',
                borderBottom: '2px solid transparent',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  color: '#1e40af', // tummempi hoverissa
                  borderBottom: '2px solid #0066cc',
                },
                '&:focus-visible': {
                  outline: '3px solid #ffcc00',
                  outlineOffset: '2px',
                  backgroundColor: '#fff9e6',
                  borderBottom: '2px solid #0066cc',
                },
              }}
              href='https://creativecommons.org/licenses/by-sa/3.0/'
            >
              CC BY-SA 3.0{' '}
            </a>
            <a
              css={{
                display: 'block',
                fontSize: '1.25rem',
                marginBottom: '20px',
                color: ' #0066cc',
                transition: 'border-bottom 0.2s ease',
                borderBottom: '2px solid transparent',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  color: '#1e40af', // tummempi hoverissa
                  borderBottom: '2px solid #0066cc',
                },
                '&:focus-visible': {
                  outline: '3px solid #ffcc00',
                  outlineOffset: '2px',
                  backgroundColor: '#fff9e6',
                  borderBottom: '2px solid #0066cc',
                },
              }}
              href='https://creativecommons.org/licenses/by-sa/4.0/'
            >
              CC BY-SA 4.0{' '}
            </a>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Credits;
