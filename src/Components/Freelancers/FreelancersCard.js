import PropTypes from 'prop-types'
import styled from 'styled-components'

const FreeLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`
const FreeImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

function FreelancersCard({ name, picture, jobTitle, index }) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', padding: 15 }}
      key={index}
    >
      <FreeLabel>{name}</FreeLabel>
      <FreeImg alt="freelancerimg" src={picture} />
      <FreeLabel>{jobTitle}</FreeLabel>
    </div>
  )
}

FreelancersCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
}

FreelancersCard.defaultProps = {
  name: '',
  jobTitle: '',
  picture: '',
}

export default FreelancersCard
