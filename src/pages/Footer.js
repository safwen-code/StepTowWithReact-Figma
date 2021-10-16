import styled from 'styled-components'
import colors from '../utils/colors.js'
import ThemContext from '../context/ThemContext.js'
import { useContext } from 'react'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  //const { themHundler, themState } = useContext(ThemContext)

  return (
    <ThemContext.Consumer>
      {({ themHundler, themState }) => (
        <FooterContainer>
          <NightModeButton onClick={() => themHundler()}>
            Changer de mode : {themState === 'light' ? '☀️' : '🌙'}
          </NightModeButton>
        </FooterContainer>
      )}
    </ThemContext.Consumer>
  )
}
export default Footer
