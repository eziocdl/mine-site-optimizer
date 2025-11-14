import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: contact,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          error: "Validation failed",
          details: validationError.message,
        });
      }
      
      console.error("Error creating contact submission:", error);
      res.status(500).json({
        success: false,
        error: "Failed to submit contact form",
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({
        success: true,
        data: submissions,
      });
    } catch (error: any) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch contact submissions",
      });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      const isSubscribed = await storage.isEmailSubscribed(validatedData.email);
      if (isSubscribed) {
        return res.status(400).json({
          success: false,
          error: "This email is already subscribed to our newsletter",
        });
      }

      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Successfully subscribed to newsletter",
        data: subscription,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          error: "Validation failed",
          details: validationError.message,
        });
      }
      
      console.error("Error creating newsletter subscription:", error);
      res.status(500).json({
        success: false,
        error: "Failed to subscribe to newsletter",
      });
    }
  });

  app.get("/api/newsletter", async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.json({
        success: true,
        data: subscriptions,
      });
    } catch (error: any) {
      console.error("Error fetching newsletter subscriptions:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch newsletter subscriptions",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
