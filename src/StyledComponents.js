import styled from 'styled-components'

export const Aplication = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 630px) {
    padding: 4rem 2rem;
  }
`

export const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.9px;
  background: linear-gradient(
    50deg,
    rgb(220, 15, 15) 0%,
    rgba(249, 211, 180, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
`
export const H2 = styled.h2`
  font-size: 1.25rem;
  color: #f9d3b4;
  font-family: var(--font-raleway);
`
export const Search = styled.div`
  width: 71%;
  margin: 4rem 0 2rem;
  display: flex;
  padding: 1.5rem 1.75rem;
  border-radius: 3rem;
  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;

  @media (max-width: 650px) {
    padding: 1.5rem 1.75rem;
    width: 90%;
  }

  input {
    flex: 1;
    border: none;
    font-size: 1.5rem;
    font-family: var(--font-raleway);
    font-weight: 500;
    padding-right: 1rem;

    outline: none;
    color: #a1a1a1;
    background: #1f2123;
  }

  @media (max-width: 650px) {
    input {
      font-size: 1rem;
    }
  }

  img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const Movie = styled.div`
  width: 310px;
  height: 460px;
  margin: 1.5rem;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
  &:hover .Div1 {
    opacity: 1;
  }
  &:hover .Div2 {
    height: 100%;
    opacity: 0.3;
  }
  &:hover .Div3 {
    background-color: transparent;
  }
`
export const MovieDiv1 = styled.div`
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
  color: #f9d3b4;
  &:hover {
    opacity: 1;
  }
`
export const MovieDiv2 = styled.div`
  width: 100%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
  }
`

export const MovieDiv3 = styled.div`
  z-index: 2;
  background-color: #343739;
  padding: 16px 24px 24px 24px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  span {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #f0f0f0;
  }
  h3 {
    margin-top: 5px;
    font-family: 'Roboto Slab', serif;
    color: #f9d3b4;
  }
`

export const Empty = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Ftr = styled.p`
  margin: 30px 0;
  color: white;
`
