import { Express, Request, Response } from "express";

export default function (app: Express) {
    app.get("/health", (req: Request, res: Response) => res.sendStatus(200));
  
    // // Register user
    // app.post("/api/users");
  
    // // Login
    // app.post("/api/sessions");
  
    // // Get the user's sessions
    // app.get("/api/sessions");
  
    // // Logout
    // app.delete("/api/sessions");
  
    // // Create a post
    // app.post("/api/posts");
  
    // // Update a post
    // app.put( "/api/posts/:postId");
  
    // // Get a post
    // app.get("/api/posts/:postId");
  
    // // Delete a post
    // app.delete("/api/posts/:postId");
  }