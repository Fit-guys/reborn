export default () => ({
  card: {
    width: '20vw',
    height: '35vh',
    borderRadius: '8px',
    background: 'none',
  },
  media: {
    backgroundOrigin: 'border-box',
    height: '35vh',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'flex-end',
  },
  cardContent: {
    width: '100%',
    background: `linear-gradient(
      to top,
      black, 
      transparent
    )`,
  },
  text: {
    color: 'white !important',
  },
});
