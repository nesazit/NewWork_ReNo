import React from "react";
import styled from "styled-components";
import ImgAvatar from "../img/nesazit.jpg";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={ImgAvatar} />
      <Details>
        <Name>
          A Saeed <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam
          quaerat veniam modi est autem quod voluptatibus iure commodi expedita
          quisquam vitae in ea ipsum minima eveniet illum iusto natus deleniti,
          non facilis. Maxime sed iure itaque et earum cupiditate.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
