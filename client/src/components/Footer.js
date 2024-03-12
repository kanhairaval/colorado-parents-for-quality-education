import React from 'react';
import { Footer as FlowbiteFooter } from "flowbite-react";
import "../style/Tailwind.css";

function Footer() {
  return (
    <FlowbiteFooter container>
      <FlowbiteFooter.Copyright href="#" by="CPQE™" year={2024} />
      <FlowbiteFooter.LinkGroup>
        <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#">Contact</FlowbiteFooter.Link>
      </FlowbiteFooter.LinkGroup>
    </FlowbiteFooter>
  );
};

export default Footer;