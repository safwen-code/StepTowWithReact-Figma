import '../App.css'
import styled from 'styled-components'
import { useState } from 'react'
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`
const BallonDor = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 161px;
  background-color: chartreuse;
  border: dashed red;
  transform: scale(${({ size }) => size});
`
function Home() {
  const [size, setsize] = useState(1)
  return (
    <HomeContainer>
      <h1 onClick={() => setsize(size + 0.1)}>page d'accueil 🏡</h1>
      <BallonDor size={size} />
    </HomeContainer>
  )
}

export default Home
