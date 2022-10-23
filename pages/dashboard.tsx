import styled from "styled-components";
import Hall from "../components/hall";
import Sidebar from "../components/sidebar";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: red; */
`;

const Dashboard = () => {
  return (
    <Row className="row">
      <Sidebar />
      <Hall />
    </Row> 
  );
};
export default Dashboard;
