export const getRandomThingy = () : import('@ryancavanaugh/pkg1').thingy => {
  switch (Math.floor(Math.random() * 3)) {
    case 0 : {
      return 'foo';
    };
    case 1 : {
      return 'bar';
    };
    default : {
      return 'baz';
    }
  }
};
