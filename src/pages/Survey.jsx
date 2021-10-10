import { useParams } from 'react-router-dom'
function Survey() {
  const { questionNumber } = useParams()
  return (
    <div>
      <h1> question ❓</h1>
      <h2>questionNumber{questionNumber}</h2>
    </div>
  )
}
export default Survey
