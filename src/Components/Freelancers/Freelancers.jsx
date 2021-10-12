import { Data } from './Data'
import FreelancersCard from './FreelancersCard'
import styled from 'styled-components'
import colors from '../../utils/colors'
function Freelancers() {
  console.log(Data)

  const FreelancerContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
  `
  const PageTitle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;
  `

  const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
  `
  return (
    <>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <FreelancerContainer>
        {Data.map((el, index) => (
          <FreelancersCard
            name={el.name}
            jobTitle={el.jobTitle}
            picture={el.picture}
            index={index}
          />
        ))}
      </FreelancerContainer>
    </>
  )
}
export default Freelancers
