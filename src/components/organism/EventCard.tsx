import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Card,
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
import { AuthContext } from '../../context/auth.context';

function EventCard({
  active,
  customers,
  date,
  id,
  location,
  name,
  splashImg,
  description,
  takeOrders,
  orders,
  staff,
}: Pick<
  Event,
  | 'active'
  | 'customers'
  | 'date'
  | 'id'
  | 'location'
  | 'name'
  | 'splashImg'
  | 'description'
  | 'takeOrders'
  | 'orders'
  | 'staff'
>) {
  const [expanded, setExpanded] = useState(false);

  const { user } = useContext(AuthContext);

  if (!id || !active) {
    return <Typography variant='h2'>We could not find this event!</Typography>;
  }

  return (
    <Card sx={{ my: 2 }}>
      <Link to={`/event/${id}`}>
        <CardMedia component='img' image={splashImg} alt={name} />
      </Link>
      <Stack sx={{ p: 2 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Link to={`/event/${id}`}>
            <Typography variant='h5' fontWeight={700}>
              {name}
            </Typography>
          </Link>
          {customers[0] && customers[0].profileImg && (
            <AvatarGroup max={3} total={customers.length}>
              {customers.slice(0, 2).map((customer) => (
                <Avatar
                  key={customer.id}
                  alt={customer.name}
                  src={customer.profileImg}
                />
              ))}
            </AvatarGroup>
          )}
        </Stack>
        {user && (
          <EventActions
            user={user}
            customers={customers}
            staff={staff}
            takeOrders={takeOrders}
            orders={orders}
            id={id}
          />
        )}
      </Stack>
      <Divider />
      <Stack
        direction='row'
        justifyContent='space-between'
        sx={{ px: 2, py: 1 }}
      >
        <Chip
          icon={<CalendarMonthIcon />}
          label={dayjs(date).format('DD/MM/YYYY')}
        />
        <LocationTag {...location} />
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
          <Typography>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EventCard;
