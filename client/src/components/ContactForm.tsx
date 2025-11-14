import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactFormProps {
  currentLanguage: string;
}

export function ContactForm({ currentLanguage }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    en: {
      title: "Get in Touch",
      description: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      successDesc: "We'll get back to you as soon as possible.",
      error: "Failed to send message",
      errorDesc: "Please try again later.",
      contactInfo: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
    },
    pt: {
      title: "Entre em Contato",
      description: "Tem dúvidas? Adoraríamos ouvir de você. Envie-nos uma mensagem e responderemos o mais breve possível.",
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      successDesc: "Entraremos em contato em breve.",
      error: "Falha ao enviar mensagem",
      errorDesc: "Por favor, tente novamente mais tarde.",
      contactInfo: "Informações de Contato",
      emailLabel: "Email",
      phoneLabel: "Telefone",
      addressLabel: "Endereço",
    },
    es: {
      title: "Póngase en Contacto",
      description: "¿Tiene preguntas? Nos encantaría saber de usted. Envíenos un mensaje y le responderemos lo antes posible.",
      name: "Nombre",
      email: "Correo Electrónico",
      subject: "Asunto",
      message: "Mensaje",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      successDesc: "Nos pondremos en contacto pronto.",
      error: "Error al enviar mensaje",
      errorDesc: "Por favor, inténtelo de nuevo más tarde.",
      contactInfo: "Información de Contacto",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      addressLabel: "Dirección",
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      language: currentLanguage,
    },
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, language: currentLanguage }),
      });

      if (response.ok) {
        toast({
          title: t.success,
          description: t.successDesc,
        });
        form.reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: t.error,
        description: t.errorDesc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Form */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-2xl" data-testid="text-contact-form-title">
            {t.title}
          </CardTitle>
          <CardDescription data-testid="text-contact-form-description">
            {t.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.name}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t.name}
                        data-testid="input-contact-name"
                      />
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
                    <FormLabel>{t.email}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder={t.email}
                        data-testid="input-contact-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.subject}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t.subject}
                        data-testid="input-contact-subject"
                      />
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
                    <FormLabel>{t.message}</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={t.message}
                        rows={6}
                        data-testid="input-contact-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-contact-submit"
              >
                {isSubmitting ? (
                  t.sending
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    {t.submit}
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle data-testid="text-contact-info-title">
            {t.contactInfo}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium mb-1">{t.emailLabel}</p>
              <p className="text-sm text-muted-foreground" data-testid="text-contact-email">
                contact@miningcoop.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium mb-1">{t.phoneLabel}</p>
              <p className="text-sm text-muted-foreground" data-testid="text-contact-phone">
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium mb-1">{t.addressLabel}</p>
              <p className="text-sm text-muted-foreground" data-testid="text-contact-address">
                Mining District, Resources Avenue<br />
                Industrial Park, 12345<br />
                Country
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
