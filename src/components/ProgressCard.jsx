import { Text, Timeline } from '@mantine/core';
import React from 'react';
import { IconSun, IconVideo } from '@tabler/icons';

import { GiMicrophone } from 'react-icons/gi';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const PtogressCard = ({ item, seq }) => {
  const { date, imgURL, title, subtitle } = item;
  // console.log(date)
  // const pos = seq % 2 === 0 ? "right" : "left"

  // return (
  //   <VerticalTimeline>
  //     <VerticalTimelineElement
  //       date={date}
  //       // className="vertical-timeline-element--work "
  //       contentStyle={{ background: "#e3e3e3", color: "black" }}
  //       contentArrowStyle={{ borderRight: "7px solid  rgb(31,41,55)" }}
  //       iconStyle={{ background: "rgb(31,41,55)", color: "#fff" }}
  //       icon={<GiMicrophone />}
  //       position={pos}
  //     >
  //       <h3 className="text-2xl font-bold underline pb-2">{title}</h3>
  //       {imgURL && (
  //         <img src={imgURL} className="h-1/2 w-full self-center rounded" />
  //       )}
  //       <p>{subtitle}</p>
  //     </VerticalTimelineElement>
  //   </VerticalTimeline>
  // )

  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <Timeline>
        {/* If you do not pass bullet prop, default bullet will be rendered */}
        {/* <Timeline.Item title='Default bullet' bulletSize={24}>
          <Text color='dimmed' size='sm'>
            Default bullet without anything
          </Text>
        </Timeline.Item> */}
        <Timeline.Item
          title={title}
          bulletSize={24}
          bullet={<IconSun size={14} />}
        >
          <Text color='dimmed' size='sm'>
            {subtitle}
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
export default PtogressCard;
