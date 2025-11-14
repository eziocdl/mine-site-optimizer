import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <Card
          key={testimonial.id}
          className="hover-elevate"
          data-testid={`card-testimonial-${testimonial.id}`}
        >
          <CardContent className="pt-6">
            <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
            <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-quote-${testimonial.id}`}>
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
              <Avatar data-testid={`avatar-testimonial-${testimonial.id}`}>
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold" data-testid={`text-testimonial-name-${testimonial.id}`}>
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${testimonial.id}`}>
                  {testimonial.role}
                </p>
                <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-company-${testimonial.id}`}>
                  {testimonial.company}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
