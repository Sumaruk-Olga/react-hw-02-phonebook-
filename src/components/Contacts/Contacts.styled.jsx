import styled from "@emotion/styled";

export const ContactsList = styled.ul`
width: 90%;
margin: 15px auto;
@media screen and (min-width: 768px) {
      width: 75%;
    }
    @media screen and (min-width: 1200px) {
      width: 50%;
  }
`;

export const ContactItem = styled.li`
border: 2px solid red;
display: flex;
justify-content: space-between;
`;

export const DeleteButton = styled.button`
border: 1px solid green;
`;
