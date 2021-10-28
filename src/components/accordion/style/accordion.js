import styled from "styled-components/macro";

export const Container = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  color: white;
`;
export const Inner = styled.div`
  width: 100%;
`;
export const Item = styled.div`
  padding: 0 5%;
  margin: 10px 0;
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #333;
`;
export const Body = styled.div`
  padding: 10px 15px;
  background-color: #333;
  transition: transform 0.1s ease-in-out;
  transform-origin: top center;
  transform: scaleY(0);

  &.open {
    transform: scaleY(1);
  }
`;
export const Title = styled.h4`
  font-size: 24px;
`;
export const Text = styled.p`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Icon = styled.span`
  display: block;
  font-size: 35px;
  line-height: 1;
  /* transition: transform 0.2s ease-in-out; */

  &.open {
    transform: rotate(45deg);
  }
`;
export const Frame = styled.div``;
