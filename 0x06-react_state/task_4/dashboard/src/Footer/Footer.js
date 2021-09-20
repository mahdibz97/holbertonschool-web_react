import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext'

export default function Footer(props) {
  const {user} = useContext(AppContext);
  return (
        <div className={props.className}>
          {user.isLoggedIn && <a href="https://github.com/atefMck/">Contact us</a>}
           <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
        </div>
  );
}

