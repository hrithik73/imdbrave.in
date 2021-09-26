import React from "react"

import { GiMicrophone } from "react-icons/gi"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const PtogressCard = ({ item, seq }) => {
  const { date, imgURL, title, subtitle } = item
  console.log(date)
  const pos = seq % 2 === 0 ? "right" : "left"
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date={date}
        className="vertical-timeline-element--work "
        contentStyle={{ background: "rgb(31,41,55)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(31,41,55)" }}
        iconStyle={{ background: "rgb(31,41,55)", color: "#fff" }}
        icon={<GiMicrophone />}
        position={pos}
      >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <p>{subtitle}</p>
        {imgURL && (
          <img src={imgURL} className="h-1/2 w-1/2 self-center rounded" />
        )}
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
export default PtogressCard
