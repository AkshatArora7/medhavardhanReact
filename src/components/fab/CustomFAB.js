import React, { useState } from "react";
import "./CustomFAB.css";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function CustomFAB() {
  const [isOpened, setOpen] = useState(false);

  return (
    <menu className={`${!isOpened ? "close" : "open"}`}>
      <a
        href="javascript:void(0)"
        className="action instagram"
        onClick={() =>
          openInNewTab("https://www.instagram.com/medhavardhanofficial/")
        }
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="javascript:void(0)"
        className="action whatsapp"
        onClick={() =>
          openInNewTab(
            "https://wa.me/+918750504538?text=Hello%2C%20I%27m%20inquisitive%20about%20reserving%20a%20demo%20session%20with%20Medhavardhan%2C%20can%20I%20get%20to%20know%20the%20details%3F"
          )
        }
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href="javascript:void(0)"
        className="action twitter"
        onClick={() => openInNewTab("https://twitter.com/medhavardhanedu")}
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="javascript:void(0)"
        className="action telegram"
        onClick={() => openInNewTab('https://t.me/taruns89')}
      >
        <i className="fab fa-telegram"></i>
      </a>
      <a
        href="javascript:void(0)"
        className="trigger"
        onClick={() => setOpen(!isOpened)}
      >
        <i className="fab fa-plus"></i>
      </a>
    </menu>
  );
}

export default CustomFAB;
