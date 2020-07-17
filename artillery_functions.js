module.exports = {
  getRandomIdFirstHalf: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 5000000) + 1;
    return done();
  },
  getRandomIdSecondHalf: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 10000000) + 5000000;
    return done();
  },
  getRandomIdTenPercent: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 1000000) + 9000000;
    return done();
  },
};
