import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 15px;
  min-height: 300px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 14px 2px rgba(0, 0, 0, 0.07);
  }
`;

const Media = styled.div`
  position: relative;
  height: 180px;
  padding: 20px;

  &:after {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 6px;
    content: "";
    opacity: 0;
    width: 100%;
    transition: transform 0.4s, opacity 0.4s;
    transform: translate3d(-100%, 0, 0);
    background: #77d0fa linear-gradient(to right, #82b4e2 0%, #77d0fa 100%);
  }
  /* 153e69  6caae4 */
  &:hover:after {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const Body = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  text-align: left;
  color: #536171;
  flex: 0 1 auto;
`;

const Text = styled.p`
  margin: 0;
`;

const Footer = styled.div`
  margin: auto 25px 20px 25px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.25s;
`;

const Image = styled.img`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Read = styled.span`
  font-size: 15px;
  letter-spacing: 1.5px;
  display: inline-block;
  transition: 0.4s;
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0.35;
  color: #2a3039;

  &:hover {
    opacity: 1;
    color: #536171;
  }
`;

export { Card, Media, Body, Text, Footer, Link, Image, Read };
