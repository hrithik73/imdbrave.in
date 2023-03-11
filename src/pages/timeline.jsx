import React from 'react';
import { Text, Timeline as ManTanTimeline } from '@mantine/core';
import { IconSun, IconMicrophone2 } from '@tabler/icons';

import ProgressCard from '../components/ProgressCard';
import { ReadDB } from '../utility/Firebase';

const Timeline = ({ data }) => {
  return (
    <div
      style={{
        maxWidth: 320,
        margin: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <ManTanTimeline>
        {/* If you do not pass bullet prop, default bullet will be rendered */}
        {/* <Timeline.Item title='Default bullet' bulletSize={24}>
          <Text color='dimmed' size='sm'>
            Default bullet without anything
          </Text>
        </Timeline.Item> */}
        {data.map((item, seq) => {
          return (
            // <ProgressCard item={item} key={item.timeInterval} seq={seq + 1} />
            <ManTanTimeline.Item
              title={item.title}
              bulletSize={24}
              bullet={<IconMicrophone2 size={14} />}
            >
              <Text color='dimmed' size='sm'>
                {item.subtitle}
              </Text>
              <Text size='xs' mt={4}>
                {item.date}
              </Text>
            </ManTanTimeline.Item>
          );
        })}
      </ManTanTimeline>
    </div>
  );
};
export default Timeline;


export async function getServerSideProps(context) {
  const data = await ReadDB(null, 'timeline');
  return {
    props: { data }, // will be passed to the page component as props
  };
}
