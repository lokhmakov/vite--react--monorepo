const resolver = {
  alias(id) {
    const isProd = process.env.NODE_ENV === "production";
    if (id.match(/^@material-ui\/icons\//)) {
      console.log(`resolver id: ${id}`);
      return isProd
        ? id
        : id.replace(/@material-ui\/icons\//, "@material-ui/icons/esm/");
    }
    if (id.match(/^@material-ui\/core\//)) {
      console.log(`resolver id: ${id}`);
      return isProd
        ? id
        : id.replace(/@material-ui\/core\//, "@material-ui/core/esm/");
    }
  },
};

module.exports = {
  resolvers: [resolver],
};
