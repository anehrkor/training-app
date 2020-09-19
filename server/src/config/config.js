module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DATABASE || "trainingapp",
    username: process.env.USERNAME || "anehrkorn",
    password: process.env.PASSWORD || "trainingapp",
    options: {
      dialect: process.env.DIALECT || "postgres",
      host: process.env.HOST || "localhost",
      port: "5432",
      storage: "./trainingtypes.postgres",
    },
  },
};
