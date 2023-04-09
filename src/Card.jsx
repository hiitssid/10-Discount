import {useState, useEffect} from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Card.css";
import React from "react";
export default function Card(props) {
  const handleCopy = () => {
    // react-copy-to-clipboard function
    //it was and is blank, leave it this way
  };

  const [copied, setCopied] = useState(false);
  function handleClick() {
    setCopied(true);
  }
  useEffect(() => {
    let timeoutId = null;

    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [copied]);

  return (
    <CopyToClipboard text={props.sp} onCopy={handleCopy}>
      <div class="sellCard" onClick={handleClick}>
        {copied && <h5 className="copied-msg">Copied</h5>}
        <h1 className="sellPrice">{props.sp}</h1>
        <h4>{props.mrp}</h4>
      </div>
    </CopyToClipboard>
  );
}
