import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 50px 5%;
  color: white;
`;
export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Item = styled.div`
  padding: 0 5%;
  margin: 10px 0;
  flex: 1;
  width: 100%;
  max-width: 800px;
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: #333;
  user-select: none;
  margin-bottom: 1px;

  @media (max-width: 800px) {
    padding: 10px 15px;
  }
`;
export const Body = styled.div`
  background-color: #333;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  max-height: 0;
  overflow: hidden;

  &.open {
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    max-height: 1200px;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Answer = styled.span`
  display: block;
  padding: 10px 15px;
`;

export const Question = styled.h4`
  font-size: 26px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const Text = styled.p`
  font-size: 22px;
  line-height: 1.3;
  letter-spacing: 1;
  user-select: none;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
export const Icon = styled.img`
  width: 25px;
  filter: brightness(0) invert(1);
  display: block;

  &.open {
    transform: rotate(-45deg);
  }
`;
