const root = {
  width: '100%',
};

export default {
  rootDefault: {
    ...root,
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  },
  rootColored: {
    ...root,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbarGame: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
};
