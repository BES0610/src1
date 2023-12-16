const QuestionSet = ({ setNumber, qustionValue, handleOnChange }) => (
    <div className={`Qustion-${setNumber}`}>
    <h1>Qustion-{setNumber}</h1>
    <hr />
    <label>Left Qustion</label>
    <input
    type="text"
    value={qustionValue.leftQustion}
    onChange={(e) => handleOnChange(setNumber, 'leftQustion', e)}
    />
    <label>Value Left Qustion</label>
    <input
    type="text"
    value={qustionValue.leftQustionValue}
    onChange={(e) => handleOnChange(setNumber, 'leftQustionValue', e)}
    />
    <label>Right Qustion</label>
    <input
    type="text"
    value={qustionValue.rightQustion}
    onChange={(e) => handleOnChange(setNumber, 'rightQustion', e)}
    />
    <label>Value Right Qustion</label>
    <input
    type="text"
    value={qustionValue.rightQustionvalue}
    onChange={(e) => handleOnChange(setNumber, 'rightQustionvalue', e)}
    />
</div>
);

export default QuestionSet