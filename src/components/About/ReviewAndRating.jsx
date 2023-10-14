import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`;

const Master = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  line-height: 160%;
  margin-bottom: 20px;
  text-align: center;
`;

const RatingComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

const StatusMsg = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

const StarsBox = styled.div`
  align-self: center;
  margin-bottom: 15px;
`;

const Star = styled.i`
  color: #ccc;
  cursor: pointer;
`;

const SelectedStar = styled(Star)`
  color: #ff5a49;
`;

const FeedbackTags = styled.div`
  min-height: 119px;
`;

const TagsContainer = styled.div`
  display: none;
`;

const QuestionTag = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const TagsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tag = styled.input`
  border: 1px solid #ff5a49;
  border-radius: 5px;
  color: #ff5a49;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
  background-color: ${(props) => (props.choosed ? '#ff5a49' : 'transparent')};
  color: ${(props) => (props.choosed ? '#fff' : '#ff5a49')};
`;

const ComplimentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ComplimentIcon = styled.div`
  border: 2px solid #ff5a49;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin-bottom: 15px;
  overflow: hidden;
  padding: 0 10px;
  transition: 0.5s;
  background-color: ${(props) => (props.actived ? '#ff5a49' : 'transparent')};
`;

const DoneButton = styled.input`
  background-color: #ff5a49;
  border: 1px solid #ff5a49;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  min-width: 100px;
  padding: 10px;
  display: ${(props) => (props.disabled ? 'none' : 'block')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const SubmitedBox = styled.div`
  display: none;
  padding: 20px;
`;

const Loader = styled.div`
  display: none;
  border: 5px solid transparent;
  border-top: 5px solid #4dc7b7;
  border-bottom: 5px solid #ff5a49;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 0.8s linear infinite;
`;

const SuccessMessage = styled.div`
  display: none;
`;

const ReviewRating = () => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [complimentChosen, setComplimentChosen] = useState(false);
  const [tags, setTags] = useState([]);
  const [doneClicked, setDoneClicked] = useState(false);

  const handleStarMouseOver = (starValue) => {
    setSelectedStars(starValue);
  };

  const handleStarMouseOut = () => {
    setSelectedStars(0);
  };

  const handleStarClick = (starValue, message) => {
    setSelectedStars(starValue);
    setTags([]);
    setComplimentChosen(false);
    if (starValue === 5) {
      setDoneClicked(true);
    }
  };

  const handleTagClick = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }

    if (tags.length + 1 > 0) {
      setDoneClicked(false);
    }
  };

  const handleComplimentClick = () => {
    setComplimentChosen(true);
    setTags([]);
  };

  const handleDoneClick = () => {
    // Perform any action when the "Done" button is clicked
    // You can send the data (selectedStars, tags) to the server here
    // For the sake of this example, we'll just simulate a loading state
    setDoneClicked(true);
    setTimeout(() => {
      setDoneClicked(false);
    }, 1500);
  };

  return (
    <Wrapper>
      <Master>
        <H1>Review And Rating</H1>
        <H2>How was your experience about our product?</H2>

        <RatingComponent>
          <StatusMsg>
            <strong>{selectedStars === 0 ? '' : 'You rated: '}</strong>
            {selectedStars === 0 ? 'Hover over stars to rate' : selectedStars}
          </StatusMsg>
          <StarsBox>
            {[1, 2, 3, 4, 5].map((value) => (
              <Star
                key={value}
                className={selectedStars >= value ? 'selected' : ''}
                onMouseOver={() => handleStarMouseOver(value)}
                onMouseOut={handleStarMouseOut}
                onClick={() => handleStarClick(value)}
              >
                {value}
              </Star>
            ))}
          </StarsBox>
        </RatingComponent>

        <FeedbackTags>
          {[1, 2, 3, 4, 5].map((value) => (
            <TagsContainer key={value} style={{ display: selectedStars === value ? 'block' : 'none' }}>
              <QuestionTag>Why was your {value === 3 ? 'average rating' : value < 3 ? 'experience so bad' : 'experience good'}?</QuestionTag>
            </TagsContainer>
          ))}
          <TagsContainer style={{ display: complimentChosen ? 'block' : 'none' }}>
            <div className="make-compliment">
              <ComplimentContainer>
                Give a compliment
                <i className="far fa-smile-wink" onClick={handleComplimentClick}></i>
              </ComplimentContainer>
            </div>
          </TagsContainer>
          <TagsBox>
            <Tag
              type="text"
              placeholder="Please enter your review"
            />

            <input type="hidden" name="product_id" value="{{ $products->id }}" />
          </TagsBox>
        </FeedbackTags>

        <DoneButton
          type="submit"
          className="done btn btn-warning"
          disabled={doneClicked}
          value="Add Review"
          onClick={handleDoneClick}
        />

        <SubmitedBox style={{ display: doneClicked ? 'block' : 'none' }}>
          <Loader />
          <SuccessMessage>Thank you!</SuccessMessage>
        </SubmitedBox>
      </Master>
    </Wrapper>
  );
};

export default ReviewRating;
