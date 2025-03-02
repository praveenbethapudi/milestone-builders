import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MessageCircle } from "lucide-react";

// Type declaration for environment variables
interface EnvVariables {
  VITE_TELECRM_API_URL: string;
  VITE_TELECRM_API_TOKEN: string;
  VITE_TELECRM_ENT_ID: string;
}

export default function Contact() {
  const { toast } = useToast();

  // Safely access environment variables
  const env = import.meta.env as unknown as EnvVariables;
  const api_url = env.VITE_TELECRM_API_URL;
  const token = env.VITE_TELECRM_API_TOKEN;
  const ent_id = env.VITE_TELECRM_ENT_ID;

  const form = useForm({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Only construct URI if environment variables are available
  const uri = api_url && ent_id ? `${api_url}/${ent_id}/autoupdatelead` : '';

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      if (!uri || !token) {
        throw new Error("Missing configuration for TeleCRM integration");
      }

      const body = {
        fields: {
          name: values.name,
          mobile: values.phone,
          email: values.email,
        },
        actions: [
          {
            type: "SYSTEM_NOTE",
            text: "Lead Source: Website",
          },
          {
            type: "SYSTEM_NOTE",
            text: `Message: ${values.message}`,
          },
        ],
      };

      await apiRequest("POST", uri, body, token);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Your inquiry has been sent. We'll contact you soon!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6 text-muted-foreground">
              Interested in viewing our luxury apartments? Fill out the form or
              contact us directly.
            </p>

            <Button
              className="w-full mb-4"
              onClick={() =>
                window.open("https://wa.me/917440075000", "_blank")
              }
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your requirements"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}