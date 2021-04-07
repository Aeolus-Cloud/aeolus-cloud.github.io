import styled from 'styled-components'
import Image1 from '../../assets/business-3d-businessman-and-coffee.png'
import Image2 from '../../assets/business-3d-businessman-walking.png'

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  flex-direction: column;

  position: relative;
  z-index: 1;

  overflow: auto;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .container-session {
    max-width: 500px;
    text-align: center;
  }
`

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 520px;
  padding: 3em;

  .hero-text {
    max-width: 506px;

    h2 {
      font-size: 44px;
    }

    p {
      margin-top: 2em;
      color: #444;
      font-weight: 400;
      font-size: 18px;
    }
  }

  .hero-buttons {
    margin-top: 2em;

    button, a {
      cursor: pointer;
      text-decoration: none;
      padding: 10px;
      font-size: 16px;
      transition-duration: 200ms;
      display: inline-block;

      :nth-child(1) {
        background-color: rgb(125, 99, 221);
        color: #fff;
        border: 0;
        padding: 10px 25px;
      }

      :nth-child(2) {
        color: #333;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, .1);
        margin-left: 2em;
      }

      :hover {
        transform: scale(1.1);
      }
    }
  }

  img {
    width: 60%;
    height: 500px;
    max-width: 600px;
    mix-blend-mode: color;
    object-fit: contain;
  }
`

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, .1);
  margin: 3em 0;
`

export const PresentingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;

  margin-top: 3em;

  h2 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 2em;

    span {
      background: rgb(221, 99, 147);
      padding: 0 10px;
      color: #fff;
    }
  }


  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: center;
    width: 100%;


    li {
      margin-top: 3em;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, .1);
      width: 30%;
      padding: 2em;
      transition-duration: 200ms;
      cursor: pointer;
      position: relative;
      z-index: 1;

      a {
        color: #000;
        text-decoration: none;
      }

      p {
        text-align: center;
        margin-top: 1em;
      }

      :nth-child(1) {
        overflow: hidden;

        ::before {
          content: "";
          position: absolute;
          right: 0;
          top: 3em;

          background-image: url("${Image1}");
          background-position: top right;
          background-repeat: no-repeat;
          background-size: contain;

          width: 300px;
          height: 300px;

          opacity: .1;

          z-index: -1;
        }
      }

      :nth-child(2) {
        margin-left: 2em;
        overflow: hidden;

        ::before {
          content: "";
          position: absolute;
          right: -30px;
          top: 0;

          background-image: url("${Image2}");
          background-position: top right;
          background-repeat: no-repeat;
          background-size: contain;

          width: 500px;
          height: 500px;

          opacity: .1;

          z-index: -1;
        }
      }

      :hover {
        transform: scale(1.1);

        :nth-child(1) {
          background: #3D39CC;
          
          a {
            color: #fff;
          }
        }

        :nth-child(2) {
          color: #000;
          background: #F3CB36;
        }
      }
    }
  }
`

export const WhyUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;

  margin: 3em auto 0 auto;
  padding: 3em;

  .title {
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    margin: 0 auto;

    b {
      font-weight: 700;
    }
  }

  .info-presestion {
    padding: 1em 20px;
    border-radius: 10px;
    width: 100%;

    p {
      color: #333;
      max-width: 530px;
      text-align: center;
      margin: 0 auto;
      font-size: 18px;
    }
  }
`

export const CollaborativeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, .1);
  border-bottom: 1px solid rgba(0, 0, 0, .1);

  img {
    display: flex;
    justify-content: flex-start;
    width: 40%;
    object-fit: cover;
  }

  div {
    max-width: 500px;

    h2 {
      font-size: 48px;
      margin-bottom: .5em;
    }

    p {
      color: #333;
      font-size: 18px;
    }
  }
`