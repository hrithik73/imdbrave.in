import React from "react"
import { LineProgressBar } from "@frogress/line"

const ProgressBarComponent = ({ progress, color }) => {
  // console.log(progress)

  return (
    <LineProgressBar
      percent={progress}
      progressColor={color}
      containerColor="#f0d4da"
    />
  )
}
export default ProgressBarComponent
