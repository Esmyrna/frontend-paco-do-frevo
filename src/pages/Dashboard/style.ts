import styled from "styled-components";

export const SectionDash = styled.section`
  background-color: #f4f4f3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GraphChart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  flex-direction: row;
  height: 100%;

  @media (width < 720px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerGraphStackBarChart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  height: 100%;
  background-color: #fff;
  margin: 1rem;
  padding: 2rem;
  flex-direction: column;
`;
export const ContainerGraphChart = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  height: 100%;
  padding: 2rem;
`;

export const ContainerGraphPie = styled.div`
  background-color: #fff;
  width: 30%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  height: 100%;
  flex-direction: column;
`;

export const GraphChartTwo = styled.div`
  width: 100%;
  display: flex;
  height: 100%;

  @media (width < 720px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerGraphChartTwo = styled.div`
  background-color: #fff;
  width: 60%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  flex-direction: column;
`;

export const TitleGraph = styled.h3`
  text-align: center;
  font-family: "Sofia Sans Condensed", sans-serif;
  font-size: 15px;
`;
