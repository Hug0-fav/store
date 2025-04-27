import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { getCurrentUser, logout } from "../data/auth";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

// const Hihome = styled.header`
//   background-color: var(--secondary-color-06);
//   color: var(--primary-color-01);
//   padding: 1rem 2rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   position: relative;
// `;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 1rem;
  width: 200px;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 2px var(--primary-color-02);
  }
`;

const Hihome = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
  padding: 10px 2rem;
  background-color: var(--secondary-color-06);
  color: var(--primary-color-01);
`;

const Logo = styled(Link)`
  color: var(--primary-color-02);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    background-color: var(--secondary-color-07);
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem 0;
    z-index: 100;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: var(--primary-color-01);
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    /* background-color: var(--primary-color-02); */
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: var(--primary-color-02);
  z-index: 200;
  padding: 10px 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledCartLink = styled(NavLink)`
  position: relative;
  /* background-color: var(--primary-color-02); */
  color: var(--primary-color-01);
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  /* transition: background-color 0.3s ease; */

  &:hover {
    /* background-color: var(--primary-color-01); */
  }

  &::after {
    content: "${(props) => props.$count}";
    position: absolute;
    top: -11px;
    left: 20px;
    /* background-color: var(--primary-color-02); */
    color: var(--primary-color-01);
    font-size: 1.2rem;
    padding: 0.1rem 0.5rem;
    border-radius: 18px;
    font-weight: bold;
    display: ${(props) => (props.$count > 0 ? "block" : "none")};
  }
`;

const AccountWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const AccountButton = styled.button`
  background: transparent;
  border: none;
  color: var(--primary-color-01);
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--secondary-color-07);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  z-index: 1000;
  display: ${({ open }) => (open ? "block" : "none")};
  min-width: 150px;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  color: var(--primary-color-01);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: var(--primary-color-02);
  }
`;

function Header() {
  const { cartCount } = useCart();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    setDropdownOpen((prev) => !prev);
  }

  useEffect(() => {
    async function fetchUser() {
      const currentUser = await getCurrentUser();

      if (currentUser) {
        setUser({
          email: currentUser.email,
          username: currentUser.user_metadata?.username,
        });
      }
    }
    fetchUser();
  }, []);

  async function handleLogout() {
    try {
      await logout();
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Hihome>
      <Logo to="/" onClick={() => setMenuOpen(false)}>
        HouseofGold
      </Logo>

      <Nav open={menuOpen}>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchTerm.trim() !== "") {
              navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
              setSearchTerm(""); // clear only after search happens
            }
          }}
        />
      </Nav>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </Hamburger>

      <Nav open={menuOpen}>
        <NavLink to="/category/:name" onClick={() => setMenuOpen(false)}>
          Category
        </NavLink>
        <NavLink to="/history" onClick={() => setMenuOpen(false)}>
          History
        </NavLink>

        <StyledCartLink
          to="/cart"
          onClick={() => setMenuOpen(false)}
          $count={cartCount}
        >
          🛒Cart
        </StyledCartLink>
        {!user && (
          <AccountWrapper ref={dropdownRef}>
            <AccountButton onClick={toggleDropdown}>Account ▾</AccountButton>
            <DropdownMenu open={dropdownOpen}>
              <DropdownLink
                to="/login"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Login
              </DropdownLink>
              <DropdownLink
                to="/signup"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Signup
              </DropdownLink>
            </DropdownMenu>
          </AccountWrapper>
        )}

        {user && (
          <>
            <p>{user.username || user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </Nav>
    </Hihome>
  );
}

export default Header;
