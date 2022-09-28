import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 800px) {
    font-size: 6rem;
    line-height: 2rem;
  }

  @media (max-width: 640px) {
    font-size: 4rem;
  }

  @media (max-width: 465px) {
    font-size: 2rem;
  }

  @media (max-width: 340px) {
    line-height: 1.2rem;
    span {
      padding: 2rem 0.8rem;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 465px) {
    width: 1rem;
  }

  @media (max-width: 340px) {
    width: 0.5rem;
  }
`
