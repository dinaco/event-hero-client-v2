import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Card,
  Box,
  Stack,
  Divider,
  Chip,
  CardMedia,
  AvatarGroup,
  Avatar,
  IconButton,
  Collapse,
  CardActions,
  CardContent,
} from '@mui/material';
import dayjs from 'dayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { Event } from '../../utilities/GlobalTypes';
import EventActions from '../molecules/EventActions';
import LocationTag from '../global/atoms/LocationTag/LocationTag';

type EventCardProps = {
  key?: number | string;
  eventInfo: Event;
};

function EventCard({ eventInfo }: EventCardProps) {
  const [expanded, setExpanded] = useState(false);

  if (!eventInfo || !eventInfo.active) {
    return <Typography variant='h2'>We could not find this event!</Typography>;
  }

  return (
    <Card sx={{ my: 2 }}>
      <Link to={`/event/${eventInfo.id}`}>
        <CardMedia
          component='img'
          image={eventInfo.splashImg}
          alt={eventInfo.name}
        />
      </Link>
      <Stack sx={{ p: 2 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Link to={`/event/${eventInfo.id}`}>
            <Typography variant='h5' fontWeight={700}>
              {eventInfo.name}
            </Typography>
          </Link>
          {eventInfo.customers[0] && eventInfo.customers[0].profileImg && (
            <AvatarGroup max={3} total={eventInfo.customers.length}>
              {eventInfo.customers.slice(0, 2).map((customer) => (
                <Avatar
                  key={customer.id}
                  alt={customer.name}
                  src={customer.profileImg}
                />
              ))}
            </AvatarGroup>
          )}
        </Stack>
        {eventInfo && <EventActions event={eventInfo} />}
      </Stack>
      <Divider />
      <Stack
        direction='row'
        justifyContent='space-between'
        sx={{ px: 2, py: 1 }}
      >
        <Chip
          icon={<CalendarMonthIcon />}
          label={dayjs(eventInfo.date).format('DD/MM/YYYY')}
        />
        <LocationTag {...eventInfo.location} />
      </Stack>
      <Divider />
      <CardActions onClick={() => setExpanded(!expanded)}>
        <Typography>Event Details</Typography>
        <IconButton aria-expanded={expanded} aria-label='show more'>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent>
          <Typography>{eventInfo.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EventCard;
