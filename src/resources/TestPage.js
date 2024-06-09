import React, { useState } from 'react';
import './TestPage.css';

const TestPage = () => {
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setStep(step + 1);
  };

  return (
    <div className="test-page">
      <div className="timer-container">
        <div className="timer">Thời gian: 1 giờ 20 phút 15 giây</div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="exam-title">Môn thi : Toeic IIG</div>
          <h3>Lê Đình Hải Sơn 20205123</h3>
          <div className="test-grid">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className={`test-square ${i < 4 ? 'green-square' : ''}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="test-area">
          {step === 1 ? (
            <>
              <h2>Part 5: Reading</h2>
              <div className="resizable-container">
                <p className="paragraph">
                  Los Angeles: The O’Henry Gallery of art (1) ... oil paintings by Lasandra Page until the end of October.<br /><br />
                  Page is well known for her portrayals of Italian coastal scenes. Her work has been displayed in the Metropolitan Museum 
                  of Art, the Musee D’Orsay, and the Uffizi. Ticket prices for this traveling exhibit are $22 for adults and $12 for children 
                  including regular admission. Another (2) ... displaying Oaxacan pottery is at the museum until Nov.1.
                  Museum hours are 10 a.m - 6 p.m daily.<br /><br />
                  The Silver Star Screen shows classic films of the 50s and 60s every weekend. Bring a friend and reminisce about the “good old days”!
                  Enjoy favorites such as Casa Amarilla and Cold Snow. Admission is $8 for adults, and (3) ... rates are offered for children 12 and under.
                </p>
              </div>
              {/* Question 1 */}
              <div className="question">
                <div className="options">
                  <span className="question-number">1.</span>
                  <label>
                    <input type="radio" name="question1" value="A" />
                    A. discounted 
                  </label>
                  <label>
                    <input type="radio" name="question1" value="B" />
                    B. included  
                  </label>
                  <label>
                    <input type="radio" name="question1" value="C" />
                    C. abbreviated 
                  </label>
                  <label>
                    <input type="radio" name="question1" value="D" />
                    D. targeted
                  </label>
                </div>
              </div>

              {/* Question 2 */}
              <div className="question">
                <div className="options">
                  <span className="question-number">2.</span>
                  <label>
                    <input type="radio" name="question2" value="A" />
                    A. coupon 
                  </label>
                  <label>
                    <input type="radio" name="question2" value="B" />
                    B. market   
                  </label>
                  <label>
                    <input type="radio" name="question2" value="C" />
                    C. show     
                  </label>
                  <label>
                    <input type="radio" name="question2" value="D" />
                    D. decoration
                  </label>
                </div>
              </div>

              {/* Question 3 */}
              <div className="question">
                <div className="options">
                  <span className="question-number">3.</span>
                  <label>
                    <input type="radio" name="question3" value="A" />
                    A. exhibit   
                  </label>
                  <label>
                    <input type="radio" name="question3" value="B" />
                    B. exhibited
                  </label>
                  <label>
                    <input type="radio" name="question3" value="C" />
                    C. was exhibiting
                  </label>
                  <label>
                    <input type="radio" name="question3" value="D" />
                    D. will be exhibiting
                  </label>
                </div>
              </div>
              <button className="next-button" onClick={handleNextClick}>Next</button>
            </>
          ) : (
            <>
              <h2>Part 1: Listening</h2>
              <div className="resizable-container">
                <p className="paragraph">
                  In each question, you will look at a photograph and then listen to 4 sentences. Choose the sentence that best describes the photograph. 
                </p>
                <img src="/images/listening-example" alt="English Course" className="practice-image" />
              </div>
              {/* Question 1 */}
              <div className="question">
                <div className="options">
                  <span className="question-number">1.</span>
                  <label>
                    <input type="radio" name="question1" value="A" />
                    A
                  </label>
                  <label>
                    <input type="radio" name="question1" value="B" />
                    B
                  </label>
                  <label>
                    <input type="radio" name="question1" value="C" />
                    C
                  </label>
                  <label>
                    <input type="radio" name="question1" value="D" />
                    D
                  </label>
                </div>
              </div>

              {/* Question 2 */}
              <div className="question">
                <div className="options">
                  <span className="question-number">2.</span>
                  <label>
                    <input type="radio" name="question2" value="A" />
                    A
                  </label>
                  <label>
                    <input type="radio" name="question2" value="B" />
                    B
                  </label>
                  <label>
                    <input type="radio" name="question2" value="C" />
                    C
                  </label>
                  <label>
                    <input type="radio" name="question2" value="D" />
                    D
                  </label>
                </div>
              </div>

              {/* Question 3 */}
              <div className="question">
                <div className="options">
                  <span className="question-number">3.</span>
                  <label>
                    <input type="radio" name="question3" value="A" />
                    A 
                  </label>
                  <label>
                    <input type="radio" name="question3" value="B" />
                    B
                  </label>
                  <label>
                    <input type="radio" name="question3" value="C" />
                    C
                  </label>
                  <label>
                    <input type="radio" name="question3" value="D" />
                    D
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
