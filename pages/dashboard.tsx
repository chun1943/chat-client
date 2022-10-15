import styled from "styled-components";
import Hall from "../components/hall";
import Sidebar from "../components/sidebar";

const Row = styled.div`
  display: flex;
  /* flex-direction: row; */
`;

const Dashboard = () => {
  return (
    <Row>
      <Sidebar />
      <Hall />
    </Row> 
  );
};
export default Dashboard;
