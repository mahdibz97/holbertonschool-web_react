import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils.js'

function Footer() {
  return (
    <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
  );
}

export default Footer;
