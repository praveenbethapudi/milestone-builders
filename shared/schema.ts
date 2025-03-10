import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull()
});

export const insertInquirySchema = createInsertSchema(inquiries)
  .pick({
    name: true,
    email: true,
    phone: true,
    message: true
  })
  .extend({
    name: z.string()
      .min(1, "Name is required")
      .regex(/^[A-Za-z]+ [A-Za-z]+$/, "Please enter both first & last name. Example: Raman Singh"),
    email: z.string()
      .email("Invalid email format. Example: ram@example.com"),
    phone: z.string()
      .regex(/^\d{10}$/, "Please enter a 10-digit mobile number. Example: 9876543210"),
    message: z.string()
      .min(10, "Message is too short")
      .regex(
        /(apartment|bhk|budget|floor|rs\.?|lakhs?|crores?)/i,
        "Please mention your apartment preference, budget, or floor choice. Example: I am looking for a 3-bedroom apartment in a budget of Rs. 70 Lakhs"
      )
  });

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;