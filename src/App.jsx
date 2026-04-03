/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import React, { useState, useEffect, useRef } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { Layout, Row, Col } from 'antd';
import './App.css';
import Spinner from './Spinner';
import { toast } from 'react-toastify';
import { FaHistory, FaUser } from 'react-icons/fa';
import { GiBiceps } from 'react-icons/gi';
import { RiCommunityFill } from 'react-icons/ri';
const icons = [GiBiceps, FaHistory, FaUser, RiCommunityFill];
const { Content } = Layout;
const GET_TEAMS = gql`
  {
    teams {
      id
      name
    }
  }
`;

const GET_TEAM_INFO = gql`
  query Team($id: ID!) {
    team(id: $id) {
      id
      name
      image
      description
      achievements
      identities
      summary
      facebook
      X
      video
      arena
      arena_image
      players {
        id
        image
        player_name
        player_role_in
        player_role_out
        player_info
      }
      coaches {
        id
        image
        coach_name
        coach_role
      }
    }
  }
`;

function Teams({ onTeamSelected, selectedTeam }) {
  const { loading, error, data } = useQuery(GET_TEAMS);
  const errorToastShown = useRef(false);

  useEffect(() => {
    if (error && !errorToastShown.current) {
      toast.error(`Virhe haettaessa joukkueita: ${error.message}`);
      errorToastShown.current = true;
    }
  }, [error]);

  if (loading) return <Spinner />;
  return (
    <>
      <label
        css={{
          display: 'block',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          fontFamily: 'Inter, serif',
          margin: '0 0 1rem 0',
          color: '#000',
        }}
        htmlFor='team'
      >
        Valitse joukkue
      </label>
      <select
        id='team'
        name='team'
        value={selectedTeam}
        onChange={onTeamSelected}
        css={{
          fontSize: '1.1rem',
          marginTop: '0.2rem',
          marginBottom: '1rem',
          padding: '5px',
          color: '#000',
          backgroundColor: '#dadfe1',
          maxWidth: '100%',
        }}
      >
        {data.teams.map((team) => (
          <option
            css={{
              background: '#fff',
              color: '#000',
            }}
            key={team.id}
            value={team.id}
          >
            {team.name}
          </option>
        ))}
      </select>
    </>
  );
}

function GetTeamInfo({ id }) {
  const { loading, error, data } = useQuery(GET_TEAM_INFO, {
    variables: { id },
  });
  if (loading) return null;
  if (error) return `Error! ${error.message}`;

  return (
    <Layout
      css={{
        backgroundColor: '#ececec',
      }}
    >
      <Content>
        <Row
          justify='center'
          css={{
            position: 'relative',
            width: '100%',
            height: '70vh',
            overflow: 'hidden',
            marginBottom: '0.5rem',
          }}
        >
          <img
            src={data.team.arena_image}
            alt='Joukkueen stadion'
            loading='eager'
            fetchPriority='high'
            css={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Row>
        <Row justify='center'>
          <Col>
            <h2
              css={{
                textDecoration: 'underline',
                margin: '1.5rem 0 0.3rem 0',
              }}
            >
              {' '}
              {data.team.name}{' '}
            </h2>
          </Col>
        </Row>
        <Row
          css={{
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
          }}
          justify='center'
        >
          <Col>
            <img
              css={{
                display: 'block',
                width: '100%',
                maxWidth: '250px',
                height: 'auto',
              }}
              src={data.team.image}
              alt='joukkueen logo'
            />
          </Col>
        </Row>
        <Row justify='center'>
          <Col span={18}>
            <p
              css={{
                marginTop: '0.75rem',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {' '}
              {data.team.description}{' '}
            </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <h2
              css={{
                marginTop: '1rem',
                marginBottom: '1rem',
                textDecoration: 'underline',
              }}
            >
              Saavutukset
            </h2>
          </Col>
        </Row>
        <Row justify='center'>
          <Col span={18}>
            <p
              css={{
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {' '}
              {data.team.achievements}{' '}
            </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <h2
              css={{
                textDecoration: 'underline',
                marginTop: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              Seuraidentiteetti
            </h2>
          </Col>
        </Row>
        {data.team.identities.map((identity, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Row justify='center' key={index}>
              <Col
                css={{
                  maxWidth: '800px',
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap',
                    '@media (max-width: 500px)': {
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      marginBottom: '1rem',
                    },
                  }}
                >
                  <Icon
                    style={{
                      color: '#f22613',
                      flexShrink: 0,
                      fontSize: 'clamp(28px, 6vw, 50px)',
                      lineHeight: 1,
                    }}
                  />
                  <p
                    css={{
                      margin: 0,
                      maxWidth: '45ch',
                      minWidth: 0,
                      flex: '1 1 0',
                      '@media (max-width: 400px)': {
                        margin: '0 0 1rem 0',
                      },
                    }}
                  >
                    {identity}
                  </p>
                </div>
              </Col>
            </Row>
          );
        })}
        <Row justify='center'>
          <Col span={18}>
            <p
              css={{
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {' '}
              {data.team.summary}{' '}
            </p>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <h2
              css={{
                textDecoration: 'underline',
                marginTop: '1rem',
                marginBottom: '2rem',
              }}
            >
              Facebook ja X
            </h2>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                margin: '0',
              }}
            >
              <img
                src='/images/FB-logo.png'
                css={{ width: '40px', height: '40px', color: '#f22613' }}
              />
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
                href={data.team.facebook}
              >
                FB linkki
              </a>
            </div>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                marginTop: '1rem',
                marginBottom: '0.5rem',
              }}
            >
              <img
                src='/images/X-logo.png'
                css={{ width: '40px', height: '40px', color: '#f22613' }}
              />
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
                href={data.team.X}
              >
                X linkki
              </a>
            </div>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <h2
              css={{
                textDecoration: 'underline',
                marginTop: '2rem',
                marginBottom: '2rem',
              }}
            >
              Video
            </h2>
          </Col>
        </Row>
        <Row justify='center'>
          <Col
            css={{
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <iframe
              css={{
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                border: 'none',
              }}
              src={data.team.video}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <h2
              css={{
                textDecoration: 'underline',
                marginTop: '2rem',
                marginBottom: '2rem',
              }}
            >
              Pelaajat
            </h2>
          </Col>
        </Row>
        <Row justify='center'>
          <Col span={20}>
            <div
              css={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {data.team.players.map((player) => (
                <div
                  css={{
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    display: 'flex',
                    width: '300px',
                    margin: '0px 20px 40px',
                    border: '2px solid #000',
                    backgroundColor: '#ffcb05',
                    transition: 'transform 0.3s ease',
                    ':hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                  key={player.id}
                >
                  <div
                    css={{
                      flexBasis: '80%',
                    }}
                  >
                    <img
                      css={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                      }}
                      src={player.image}
                      key={player.id}
                      alt='pelaajan kuva'
                    />
                  </div>
                  <h3
                    css={{
                      textAlign: 'center',
                      color: '#fff',
                      backgroundColor: '#1F2937',
                      padding: '0.75rem 0',
                      marginBottom: '0',
                    }}
                  >
                    {' '}
                    {player.player_name}{' '}
                  </h3>
                  <h3
                    css={{
                      textAlign: 'center',
                      color: '#fff',
                      backgroundColor: '#EF4444',
                      padding: '0.75rem 0',
                      marginTop: '0',
                      marginBottom: '0',
                    }}
                  >
                    {' '}
                    {player.player_role_in}{' '}
                  </h3>
                  <h3
                    css={{
                      textAlign: 'center',
                      color: '#000',
                      backgroundColor: '#fff000',
                      padding: '0.75rem 0',
                      marginTop: '0',
                      marginBottom: '0',
                    }}
                  >
                    {' '}
                    {player.player_role_out}{' '}
                  </h3>
                  <a className='styled-link' href={player.player_info}>
                    Info
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <h2
              css={{
                textDecoration: 'underline',
                marginBottom: '2rem',
              }}
            >
              Pelinjohtajat
            </h2>
          </Col>
        </Row>
        <Row justify='center'>
          <Col span={20}>
            <div
              css={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {data.team.coaches.map((coach) => (
                <div
                  css={{
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    display: 'flex',
                    width: '300px',
                    margin: '0px 20px 20px',
                    border: '2px solid #000',
                    backgroundColor: '#ffcb05',
                    transition: 'transform 0.3s ease',
                    ':hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                  key={coach.id}
                >
                  <div
                    css={{
                      flexBasis: '80%',
                    }}
                  >
                    <img
                      css={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                      }}
                      src={coach.image}
                      key={coach.id}
                      alt='pelinjohtajan kuva'
                    />
                  </div>
                  <div
                    css={{
                      textAlign: 'center',
                      padding: '0.5rem 0',
                      width: '100%',
                      backgroundColor: '#1F2937',
                      color: '#FFFFFF',
                    }}
                  >
                    <h3> {coach.coach_name} </h3>
                    <h3 style={{ color: '#F59E0B' }}> {coach.coach_role} </h3>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row
          justify='center'
          css={{
            paddingBottom: '1rem',
          }}
        >
          <Col>
            <h2
              css={{
                textDecoration: 'underline',
              }}
            >
              {data.team.arena}
            </h2>
          </Col>
        </Row>
        <Row justify='center'>
          <Col>
            <img
              css={{
                width: '100%',
                maxWidth: '900px', // sama leveys kaikille
                aspectRatio: '16 / 9', // yhtenäinen kuvasuhde
                objectFit: 'cover', // rajaa siististi
                marginBottom: '2.2rem',
                border: '2px solid #000',
                borderRadius: '8px',
                display: 'block',
              }}
              src={data.team.arena_image}
              alt='joukkueen areena'
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

function App() {
  const [selectedTeam, setSelectedTeam] = useState('1');

  function onTeamSelected({ target }) {
    setSelectedTeam(target.value);
  }

  return (
    <>
      <Layout
        css={{
          minHeight: '60vh',
          paddingTop: '1.5rem',
          backgroundColor: '#ececec',
        }}
      >
        <Content>
          <Row
            justify='center'
            css={{
              paddingBottom: '1rem',
            }}
          >
            <Col>
              <Teams
                onTeamSelected={onTeamSelected}
                selectedTeam={selectedTeam}
              />
            </Col>
          </Row>
          <Row justify='center'>
            <Col>{selectedTeam && <GetTeamInfo id={selectedTeam} />}</Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default App;
