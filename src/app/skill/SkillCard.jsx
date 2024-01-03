import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function SkillCard({
  skill1,
  skill2,
  skill3,
  skill4,
  persent1,
  persent2,
  persent3,
  persent4,
}) {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {skill1}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined"  color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{persent1}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {persent2}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined"  color="info"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{skill2}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {skill3}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined"  color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{persent3}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {persent4}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined"  color="warning"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{skill4}</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
