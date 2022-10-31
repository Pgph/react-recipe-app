import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function Category() {
  return (
    <List>
      <SLink to="/cuisine/Italian">
        <Button size="large" variant="contained" startIcon={<FaPizzaSlice />}>
          Italian
        </Button>
      </SLink>
      <SLink to="/cuisine/American">
        <Button size="large" variant="contained" startIcon={<FaHamburger />}>
          American
        </Button>
      </SLink>
      <SLink to="/cuisine/Thai">
        <Button size="large" variant="contained" startIcon={<GiNoodles />}>
          Thai
        </Button>
      </SLink>
      <SLink to="/cuisine/Japanese">
        <Button size="large" variant="contained" startIcon={<GiChopsticks />}>
          Japanese
        </Button>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 550px) {
    height: 3rem;
  }
`;

export default Category;
