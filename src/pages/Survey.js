import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
function Survey() {
  const { questionNumber } = useParams()
  const queNumberParsin = parseInt(questionNumber)
  const prevQuestionNumber = queNumberParsin === 1 ? 1 : queNumberParsin - 1
  const nextQuestionNummber = queNumberParsin + 1
  useEffect(() => {
    fetch(`http://localhost:8000/survey`).then((response) =>
      response
        .json()
        .then(({ surveyData }) => console.log(surveyData))
        .catch((error) => console.log(error))
    )
  }, [])
  return (
    <div>
      <h1>Question ❓</h1>
      <h2>question Number : {queNumberParsin}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>précedent</Link>
      {queNumberParsin === 10 ? (
        <Link to="/result">Resultat</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNummber}`}> Suivant</Link>
      )}
    </div>
  )
}
export default Survey
