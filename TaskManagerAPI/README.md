# Task Manager API

Express and MongoDB API for the Task Manager application.

## Run locally
Install dependencies with `npm install`, copy `.env.example` to `.env`, set a strong random `JWT_SECRET`, start MongoDB, and run `npm start`. API defaults to port 3000.

## Routes
- `POST /auth/register`, `POST /auth/login`, `GET /auth/me`
- Authenticated task routes: `GET /tasks`, `POST /tasks`, `GET /tasks/:id`, `PUT /tasks/:id`, `DELETE /tasks/:id`
- `GET /tasks/debug/cache` reports cache hit/miss statistics.

## Practical 10: event-driven notifications
Creating a task emits `task-created` after saving to MongoDB. A listener logs the queued notification immediately and completion after a two-second delay. Deleting a task emits `task-deleted`. Listener errors are handled by the shared `error` event.

## Cache
NodeCache uses a 60-second TTL and per-user keys. Successful writes invalidate affected entries. This in-memory cache clears whenever the API process restarts.