export default () => ({
  card: {
    width: 280,
    height: 340,
    borderRadius: '8px',
    background: 'none',
  },
  media: {
    backgroundOrigin: 'border-box',
    height: 340,
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
