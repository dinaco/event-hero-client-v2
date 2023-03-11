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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { Event } from '../../utilities/GlobalTypes';

type EventCardProps = {
  key?: number | string;
  eventInfo: Event;
};

function EventCard({ eventInfo }: EventCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ my: 2 }}>
      {!eventInfo && <h2>We could not find this event!</h2>}
      {eventInfo && eventInfo.active && (
        <>
          <Link to={`/event/${eventInfo.id}`}>
            <CardMedia
              component='img'
              image={eventInfo.splashImg}
              alt={eventInfo.name}
            />
          </Link>
          <Box sx={{ p: 2 }}>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              spacing={0.5}
            >
              <Link to={`/event/${eventInfo.id}`}>
                <Typography variant='h5' fontWeight={700}>
                  {eventInfo.name}
                </Typography>
              </Link>
              {eventInfo.customers[0] && eventInfo.customers[0].profileImg && (
                <AvatarGroup
                  //  spacing='small'
                  max={3}
                  total={eventInfo.customers.length}
                >
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
            {/*             {user && eventInfo && (
              <EventActions user={user} event={eventInfo} />
            )} */}
          </Box>
          <Divider />
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
          >
            <Chip
              icon={<CalendarMonthIcon />}
              label={dayjs(eventInfo.date).format('DD/MM/YYYY')}
            />
            <Typography variant='body2' color='text.secondary'>
              <LocationOnIcon sx={{ color: grey[500] }} />{' '}
              {eventInfo.location.city}, {eventInfo.location.state} -{' '}
              {eventInfo.location.country}
            </Typography>
          </Stack>
          <Divider />
          <CardActions onClick={handleExpandClick} disableSpacing>
            <Typography variant='body1'>Event Details</Typography>
            <IconButton aria-expanded={expanded} aria-label='show more'>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>{eventInfo.description}</Typography>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
}

export default EventCard;
