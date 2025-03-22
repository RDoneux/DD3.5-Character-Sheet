import { Typography } from '@mui/material';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Typography
      variant="h1"
      sx={{
        position: 'relative',
        display: 'inline-block',
        fontSize: '24px',
        padding: '0 50px 0 50px',
        color: '#D5CAA0',
        textAlign: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -4,
          height: '2px',
          background:
            'linear-gradient(to right, transparent, #D5CAA0, transparent)'
        }
      }}
    >
      {title}
    </Typography>
  );
}
