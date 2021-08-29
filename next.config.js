const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "saylar",
        mongodb_password: "WRsU64ChToWSL2nc",
        mongodb_clustername: "cluster0",
        mongodb_database: "forms-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "saylar",
      mongodb_password: "WRsU64ChToWSL2nc",
      mongodb_clustername: "cluster0",
      mongodb_database: "forms",
    },
  };
};
