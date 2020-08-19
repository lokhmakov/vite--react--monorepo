const t = {
  from: `babel/runtime/helpers/(?!esm)`,
  to: `babel/runtime/helpers/esm/`,
};

const r = {
  from: new RegExp(t.from),
};

const resolver = {
  alias(id) {
    const isProd = process.env.NODE_ENV === "production";
    if (id.match(r.from)) {
      // console.log(`resolver id: ${id}`);
      return isProd ? id : id.replace(r.from, t.to);
    }
  },
};

module.exports = {
  resolvers: [resolver],
};
