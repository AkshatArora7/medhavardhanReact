import React from "react";
import './TestimonyArrows.css';

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function TestimonyArrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode,
  disabled: boolean,
  onClick: VoidFunction,
}) {
  return (
    <button
    className="subjectScrollButton"
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        marginRight:"10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        // opacity: disabled ? "0" : "1",
        userSelect: "none",
        color:"#6F8FAF"
      }}
    >
      {children}
    </button>
  );
}

export function LeftTestimonyArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <TestimonyArrow disabled={disabled} onClick={() => scrollPrev()}>
      <div className="column scrollerButton">
      Prev
      <i className="fas fa-arrow-left-long"/>
      </div>
    </TestimonyArrow>
  );
}

export function RightTestimonyArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <TestimonyArrow disabled={disabled} onClick={() => scrollNext()}>
    <div className="column scrollerButton">
      Next
      <i className="fas fa-arrow-right-long"/>
      </div>
    </TestimonyArrow>
  );
}
