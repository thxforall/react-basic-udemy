export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            type="NUMBER"
            id="initial-investment"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="NUMBER"
            id="annual-investment"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            type="NUMBER"
            id="expected-return"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="NUMBER"
            id="duration"
            required
            value={userInput.duration}
            onChange={(event) => handleChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
