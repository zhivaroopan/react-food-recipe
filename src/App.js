import Pages from "./pages/Pages";
import { BrowserRouter } from 'react-router-dom'
import Category from "./components/Category";
import Search from "./components/Search";
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={'/'}>Zedd's Kitchen</Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 0rem 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`

export default App;
