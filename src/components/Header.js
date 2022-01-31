import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import headerbadge from "../images/headerbadge.jpg";

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

  return (
    <header className="header-container">
      <div className="header-content">
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
                whileTap={{ scale: 0.9 }}
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
      </div>
    </header>
  );
};

export default Header;
