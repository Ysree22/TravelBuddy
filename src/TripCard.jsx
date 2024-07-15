// src/TripCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button, Box, styled } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%', // Increased width
  maxWidth: '800px', // Max width for larger screens
  height: '400px', // Set fixed height
  margin: '20px auto',
  backgroundColor: 'white',
  color: '#333',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '16px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  margin: '0 0 10px 0',
  fontSize: '1.8em',
  color: '#333',
}));

const Duration = styled(Typography)(({ theme }) => ({
  fontSize: '1em',
  color: '#777',
  marginTop: '0',
  [theme.breakpoints.up('sm')]: {
    textAlign: 'right',
  },
}));

const Dates = styled(Typography)(({ theme }) => ({
  fontSize: '1em',
  color: '#777',
  marginTop: '0',
}));

const Participants = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '16px',
  fontSize: '0.9em',
}));

const ParticipantBadge = styled('span')(({ theme }) => ({
  display: 'inline-block',
  padding: '5px 10px',
  borderRadius: '12px',
  backgroundColor: '#f0f0f0',
  textAlign: 'right',

}));

const Events = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: '16px',
  overflowY: 'auto',
  maxHeight: '200px', // Ensure content inside scrolls if it overflows
}));

const EventItem = styled(Typography)(({ theme }) => ({
  margin: '6px 0',
  paddingLeft: '10px',
  position: 'relative',
  '&:before': {
    content: '"|"',
    color: '#61dafb',
    position: 'absolute',
    left: '0',
    fontSize: '1.2em',
    lineHeight: '1.2em',
  },
}));

const JoinButton = styled(Button)(({ theme }) => ({
  display: 'block',
  width: '100%',
  textAlign: 'center',
  padding: '12px 0',
  borderRadius: '25px',
  backgroundColor: '#61dafb',
  color: 'white',
  cursor: 'pointer',
  fontSize: '1em',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#21a1f1',
  },
}));

const TripCard = ({ data }) => {
  const handleEventClick = (event) => {
    console.log('Event clicked:', event);
  };

  return (
    <StyledCard>
      <CardContent>
        <CardHeader>
          <Title variant="h5" component="div">
            {data.destination}
          </Title>
          <Duration variant="body2">
            {`${data.startDate} to ${data.endDate}`}
          </Duration>
        </CardHeader>
        <Participants>
          <ParticipantBadge>{data.count.femaleCount} F</ParticipantBadge>
          <ParticipantBadge>{data.count.maleCount} M</ParticipantBadge>
          <ParticipantBadge>{data.count.otherCount} O</ParticipantBadge>
        </Participants>
        <Events>
          <Typography variant="h6">Events</Typography>
          {data.timeline && data.timeline.timeline ? (
            data.timeline.timeline.map((entry, index) => (
              <EventItem
                key={index}
                variant="body2"
                onClick={() => handleEventClick(entry)}
              >
                {`${entry.time} - ${entry.event}`}
              </EventItem>
            ))
          ) : (
            <Typography variant="body2">No events available</Typography>
          )}
        </Events>
      </CardContent>
      <JoinButton variant="contained">
        Join
      </JoinButton>
    </StyledCard>
  );
};

export default TripCard;
