import { Data } from './Data'
import FreelancersCard from './FreelancersCard'
function Freelancers() {
  console.log(Data)

  return (
    <div>
      {Data.map((el, index) => (
        <FreelancersCard
          name={el.name}
          jobTitle={el.jobTitle}
          picture={el.picture}
          index={index}
        />
      ))}
    </div>
  )
}
export default Freelancers
