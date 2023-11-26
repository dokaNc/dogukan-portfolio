module.exports = {
  apps: [
    {
      name: "Dogukan Portfolio",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.mjs",
      args: "start",
    },
  ],
};
