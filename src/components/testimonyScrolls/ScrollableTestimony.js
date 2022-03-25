import React from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftTestimonyArrow, RightTestimonyArrow } from "./TestimonyArrows";

import TestimonyCards from "../TestimonyCards";

// import "./globalStyles.css";

import usePreventBodyScroll from "./usePreventBodyScrollTestimony";

// NOTE: for arrows on bottom
import "./arrowsOnBottomOrTopTestimony.css";
// NOTE: for hide scrollbar
import "./hideScrollbarTestimony.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "subject";
const dummyText ="Quisque et ex lorem. Quisque et ex lorem Proin id iaculis velit, sit amjshh shs st lorem.";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () => [
  {
    one: {
      studentFirstName: "Naysa",
      studentLastName: "",
      studentResult: "Chemistry- 91% Science- 100% English- 100%",
      studentTestimony: dummyText,
      studentAvatar: "/images/studentImages/naysa.jpg",
      itemId: getId(1),
    },
    two: {
      studentFirstName: "Akhilesh",
      studentLastName: "Aggarwal",
      studentResult: "Chemistry- 88% Science- 100% English- 100%",
      studentTestimony: dummyText,
      studentAvatar: "/images/studentImages/akhileshAggarwal.jpg",
      itemId: getId(1),
    },
  },
  {
    one: {
      studentFirstName: "Chirag",
      studentLastName: "Singhal",
      studentResult: "Chemistry- 89% Science- 100% English- 100%",
      studentTestimony: dummyText,
      studentAvatar: "/images/studentImages/chiragSinghal.jpg",
      itemId: getId(2),
    },
    two: {
      studentFirstName: "Teesha",
      studentLastName: "Bhandari",
      studentResult: "Chemistry- 86% English- 92% Physics- 81%",
      studentTestimony: dummyText,
      studentAvatar: "/images/studentImages/teeshaBhandari.jpg",
      itemId: getId(2),
    },
  },
  {
    one: {
      studentFirstName: "Khwaish",
      studentLastName: "Arora",
      studentResult: "Chemistry- 85% Science- 100% English- 100%",
      studentTestimony: dummyText,
      studentAvatar: "/images/studentImages/khwaishArora.jpg",
      itemId: getId(3),
    },
    two: {
      studentFirstName: "Akshay",
      studentLastName: "Raj",
      studentResult: "Chemistry- 93% Science- 100% English- 100%",
      studentTestimony: dummyText,
      studentAvatar: "/images/studentImages/akshayRaj.jpg",
      itemId: getId(3),
    },
  },
  {
    one: {
      studentFirstName: "Nusrat",
      studentLastName: "Neesha",
      studentResult: "Chemistry- 92% Science- 100% English- 100%",
      studentTestimony: dummyText,
      studentAvatar: "/images/studentImages/nusratNeesha.jpg",
      itemId: getId(4),
    },
    two: {
      studentFirstName: "Vaibhav",
      studentLastName: "Gautam",
      studentResult: "Chemistry- 96% Science- 100% English- 100%",
      studentTestimony:  dummyText ,
      studentAvatar: "/images/avatar.png",
      itemId: getId(4),
    },
  },
  {
    one: {
      studentFirstName: "Akshat",
      studentLastName: "Arora",
      studentResult: "Mathematics- 100% Science- 100% English- 100%",
      studentTestimony: dummyText,
      studentAvatar: "/images/avatar.png",
      itemId: getId(5),
    },
    two: {
      studentFirstName: "Akshat",
      studentLastName: "Arora",
      studentResult: "Mathematics- 100% Science- 100% English- 100%",
      studentTestimony: dummyText,
      studentAvatar: "/images/avatar.png",
      itemId: getId(5),
    },
  },
];

function ScrollableTestimony() {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
        className="scrollableSubjectsMain"
      >
        <ScrollMenu
          LeftArrow={LeftTestimonyArrow}
          RightArrow={RightTestimonyArrow}
          onWheel={onWheel}
        >
          {items.map(({ one, two }) => (
            <div className="column" itemId={one.itemId}>
              <TestimonyCards
              studentFirstName={one.studentFirstName}
              studentLastName={one.studentLastName}
              studentResult={one.studentResult}
              studentTestimony={one.studentTestimony}
              studentAvatar={one.studentAvatar}
              itemId={one.itemId} // NOTE: itemId is required for track items
            />            
              <TestimonyCards
              studentFirstName={two.studentFirstName}
              studentLastName={two.studentLastName}
              studentResult={two.studentResult}
              studentTestimony={two.studentTestimony}
              studentAvatar={two.studentAvatar}
              itemId={two.itemId} // NOTE: itemId is required for track items
            />
            </div>
            // <TestimonyCards
            //   studentFirstName={one.studentFirstName}
            //   studentLastName={one.studentLastName}
            //   studentResult={one.studentResult}
            //   studentTestimony={one.studentTestimony}
            //   studentAvatar={one.studentAvatar}
            //   itemId={one.itemId} // NOTE: itemId is required for track items
            // />
          ))}
        </ScrollMenu>
      </div>
    </>
  );
}
export default ScrollableTestimony;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
