import styled from 'styled-components'

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

  img {
    width: 35px;
    height: 35px;
    cursor: pointer;
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
`

export const Empty = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
