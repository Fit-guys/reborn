const section = {
  minWidth: '100%',
  minHeight: '100vh',
};

export default () => ({
  root: {
  },
  firstLook: {
    ...section,
    display: 'flex',
    alignItems: 'center',
  },
  aboutUsRoot: {
    ...section,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  techWeUse: {
    ...section,
  },
  getStartedRoot: {
    width: '450px',
    marginLeft: '12%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  getStartedCaption: {
    textTransform: 'uppercase',
  },
  getStartedButton: {
    width: '60%',
    marginTop: '25px',
  },
});
