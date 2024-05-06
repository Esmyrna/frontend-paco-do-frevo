import styled from "styled-components";

export const Steps = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StepTitle = styled.p`
  text-align: center;
  font-family: sans-serif;
  font-size: 10px;
  font-weight: bold;
`;
export const HorizontalLine = styled.hr`
  width: 30%;
  height: 1px;
  background-color: black;
  margin: 10px auto;
`;
