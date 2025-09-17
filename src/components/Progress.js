function Progress({ index, numQuestions, points, maxPosiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer != null)}></progress>
      <p>
        <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/{maxPosiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
