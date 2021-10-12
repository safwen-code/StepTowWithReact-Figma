import '../App.css'
import styled from 'styled-components'
import { useState } from 'react'
import colors from '../utils/colors'
import { StyledLink } from '../utils/Atoms'
import HomeIllustration from '../assets/HomeIllustration.svg'
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
`
function Home() {
  const [size, setsize] = useState(1)
  return (
    <HomeWrapper>
      <HomerContainer>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to ='/survey/1' $isFullLink>
faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration}/>
      </HomerContainer>
    </HomeWrapper>
  )
}

export default Home
