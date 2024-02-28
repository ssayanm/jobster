import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { nanoid } from "nanoid";

const app = express();

dotenv.config();

app.use(express.json());

let jobs = [
  { id: nanoid(), company: "microsoft", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Get all jobs
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

// create a job
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(400)
      .json({ msg: "please provide a company and postion name" });
  }
  const id = nanoid(10);
  const job = { id, company, position };

  jobs.push(job);
  res.status(200).json({ job });
});

// get single job
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
});

// edit a single job
app.patch("/api/v1/jobs/:id", (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(400)
      .json({ msg: "please provide a company and postion name" });
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ msg: "job modified", job });
});

// delete single job
app.delete("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  // jobs.pop(job);

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: "job deleted" });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
});
