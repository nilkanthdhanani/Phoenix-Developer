import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import { logo, minus, plus, greaterThan, menu } from '../../assets/images/png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [hovered, setHovered] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.classList.add('sidebar-open');
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('sidebar-open');
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('sidebar-open');
    };
  }, [sidebarOpen]);

  return (
    <div>
      <header>
        <div className="container">
          <div className="header-div">
            <div className="header-div-logo">
              <NavLink to={"/"}>
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
            <div className="header-div-list">
              {["/", "offerings", "about", "services", "contact"].map((path, index) => (
                <div
                  key={index}
                  className="header-div-ancer"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <NavLink activeclassname="active" to={path}>
                    {path === "/" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1)}
                  </NavLink>
                  {(path === "offerings" || path === "about") && (
                    <>
                      <img
                        src={hovered === index ? minus : plus}
                        alt={hovered === index ? "minus" : "plus"}
                        className={hovered === index ? "rotate" : ""}
                      />
                      {hovered === index && (
                        <div className={`dropdown-menu ${path}`}>
                          {path === "offerings" && (
                            <div className="dropdown-div">
                              <NavLink to={`/${path}/subitem1`}>
                                <img src={greaterThan} alt="greaterThan" />Digital Marketing</NavLink>
                              <NavLink to={`/${path}/subitem2`}>
                                <img src={greaterThan} alt="greaterThan" />Website Developing</NavLink>
                              <NavLink to={`/${path}/subitem3`}>
                                <img src={greaterThan} alt="greaterThan" />Degital Graphic Design</NavLink>
                              <NavLink to={`/${path}/subitem4`}>
                                <img src={greaterThan} alt="greaterThan" />Projects</NavLink>
                            </div>
                          )}
                          {path === "about" && (
                            <div className="dropdown-div">
                              <NavLink to={`/${path}/subitem1`}>
                                <img src={greaterThan} alt="greaterThan" />Terms & Conditions</NavLink>
                              <NavLink to={`/${path}/subitem2`}>
                                <img src={greaterThan} alt="greaterThan" />Cancellation & Refund Policy</NavLink>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="header-div-menu" onClick={() => setSidebarOpen(true)}>
              <img src={menu} alt="menu" />
            </div>
          </div>
        </div>
      </header>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
        <div className="sidebar-content">
          {/* <div className="sidebar-content-close">
            <img onClick={() => setSidebarOpen(false)} src={close} alt="close" />
          </div> */}
          <div className="sidebar-content-head">
            <img src={logo} alt="logo" />
          </div>
          {["Home", "Offerings", "About", "Services", "Contact"].map((text, index) => (
            <NavLink key={index} to={text === "Home" ? "/" : `/${text.toLowerCase()}`} onClick={() => setSidebarOpen(false)}>
              {text}
            </NavLink>
          ))}
        </div>
      </div>
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
}
