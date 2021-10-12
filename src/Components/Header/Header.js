import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { StyledLink } from '../../utils/Atoms'
import DarkLogo from '../../assets/DarkLogo.png'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <nav>
      <NavContainer>
        <Link to="">
          <HomeLogo src={DarkLogo} />
        </Link>
        <div>
          <StyledLink to="/">Accuiel</StyledLink>
          <StyledLink to="/freelances">freelances</StyledLink>
          <StyledLink to="/survey/1">survey</StyledLink>
        </div>
      </NavContainer>
    </nav>
  )
}
export default Header
