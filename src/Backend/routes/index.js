import express from "express";
import CheckInOut from "./CheckInOutRoutes.js";
import User from "./UserRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({titulo: "Curso de node"});
  });

  app.use(
    express.json(),
    CheckInOut,
    User
  );
};

export default routes;