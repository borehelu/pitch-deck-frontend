import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const IdeaCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.1);
  padding: 0.7rem 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

const IdeaCardHeader = styled.div`
  display: flex;
  column-gap: 0.7rem;
`;

const Avatar = styled.div`
  background-color: #720026;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
`;

const PostDetails = styled.div`
  & h2 {
    font-size: 1.1rem;
  }

  & p {
    font-size: 0.8rem;
  }
`;

const IdeaContent = styled.div`
  & h1 {
    font-size: 1.4rem;
  }
  & p {
    // max-width: 86ch;
  }
`;

const IdeaActions = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;

  & div {
    display: flex;
    align-items: center;
    column-gap: 0.2rem;
    font-size: 0.9rem;
  }
`;

const TagsList = styled.div`
  margin: 0.6rem 0;
  display: flex;
  column-gap: 0.5rem;
`;

function Idea({ idea }) {
  const { id, title, author, description, createdAt, upvotes, comments } = idea;
  let values = ["ui/ux", "blockchain", "figma"];
  const { firstName, lastName } = author;
  let initials = `${firstName} ${lastName}`
    .split(" ")
    .map((name) => name[0])
    .join("");

  dayjs.extend(relativeTime);
  return (
    <IdeaCard key={id}>
      <IdeaCardHeader>
        <Avatar>{initials}</Avatar>
        <PostDetails>
          <h2>{`${firstName} ${lastName}`}</h2>
          <p>{dayjs(createdAt).fromNow()}</p>
        </PostDetails>
      </IdeaCardHeader>
      <IdeaContent>
        <h1>{title}</h1>
        <p>{description}</p>
        <TagsList>
          {values.map((value) => (
            <Tag name={value} />
          ))}
        </TagsList>
      </IdeaContent>
      <IdeaActions>
        <div>
          <i class="bx bx-upvote"></i>
          {upvotes} Upvotes
        </div>
        <div>
          <i class="bx bx-message-square-dots"></i>
          {comments} Comments
        </div>
      </IdeaActions>
    </IdeaCard>
  );
}

export default Idea;
