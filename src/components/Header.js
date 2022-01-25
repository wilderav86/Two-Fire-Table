import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container, Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import headerbadge from "../images/headerbadge.jpg";

// import Nav from "./Nav";

const Header = () => {
  const data = useStaticQuery(graphql`
    query menuItems {
      site {
        siteMetadata {
          menupageLinks {
            pageLink
            pageName
          }
        }
      }
    }
  `);

  const { menupageLinks } = data.site.siteMetadata;

  // conditionally render button animations depending on if mobile or desktop

  return (
    <header className="header-container">
      <Container as="div" className="header-content">
        <Navbar className="navbar" expand="md" bg="#e8533f" variant="dark">
          <div className="headerBadge">
            <Navbar.Brand href="/">
              <motion.img
                className="header-logo"
                src={headerbadge}
                alt="header logo"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              />
            </Navbar.Brand>
          </div>

          <Navbar.Toggle
            aria-controls="navbarResponsive"
            className="justify-content-end"
          />
          <Navbar.Collapse
            id="navbarResponsive"
            className="justify-content-end"
          >
            <Nav as="ul" className="ml-auto">
              {menupageLinks.map((page, id) => {
                return (
                  <Nav.Item as="li" key={id}>
                    <Link
                      to={page.pageLink}
                      className="nav-link"
                      activeClassName="active"
                    >
                      {page.pageName}
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>

    // <React.Fragment>
    //   <div className="header-container">
    //
    //     {/* <Nav /> */}
    //   </div>
    // </React.Fragment>
  );
};

export default Header;
