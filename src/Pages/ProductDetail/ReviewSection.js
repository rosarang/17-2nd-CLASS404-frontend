import React from 'react';
import styled from 'styled-components';

export default function ReviewSection({ reviews }) {
  return (
    <Container>
      {reviews?.map((review) => {
        return (
          <div key={review.id}>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/39/39711.svg?token=exp=1614926994~hmac=d9997611d831e29d1a2026d365f865c3"
              alt="quotation"
            />
            <blockquote cite="">{review.text}</blockquote>
            <br />
            <span>{review.author}님의 글</span>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(150px, 150px));
  gap: 15px 15px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding-bottom: 20px;
  margin-bottom: 20px;

  img {
    width: 12px;
    height: 12px;
    opacity: 0.5;
    margin-bottom: 10px;
  }

  div {
    background-color: ${({ theme }) => theme.lightGray};
    border-radius: 3px;
    padding: 30px 15px;
    text-align: center;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(8) {
      color: gray;
      background: black;
      filter: opacity(0.5);
    }
  }

  blockquote {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 20px;
    font-size: 12px;
  }

  span {
    font-size: 12px;
    color: gray;
  }
`;
