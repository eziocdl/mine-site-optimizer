import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  cooperativeName?: string;
  logoUrl?: string;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function Header({
  cooperativeName = "Global Mining Cooperative",
  logoUrl,
  currentLanguage,
  onLanguageChange,
}: HeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigationItems = [
    { path: "/", label: { en: "Home", pt: "Início", es: "Inicio" } },
    { path: "/about", label: { en: "About Us", pt: "Sobre Nós", es: "Sobre Nosotros" } },
    { path: "/products", label: { en: "Products", pt: "Produtos", es: "Productos" } },
    { path: "/investors", label: { en: "Investors", pt: "Investidores", es: "Inversores" } },
    { path: "/sustainability", label: { en: "Sustainability", pt: "Sustentabilidade", es: "Sostenibilidad" } },
    { path: "/news", label: { en: "News", pt: "Notícias", es: "Noticias" } },
    { path: "/contact", label: { en: "Contact", pt: "Contato", es: "Contacto" } },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "pt", name: "Português" },
    { code: "es", name: "Español" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1" data-testid="link-home">
            <div className="flex items-center gap-3">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={`${cooperativeName} Logo`}
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                  data-testid="img-logo"
                />
              ) : null}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-lg"
                style={{ display: logoUrl ? "none" : "flex" }}
                data-testid="logo-fallback"
              >
                {cooperativeName.split(" ").map(word => word[0]).join("").slice(0, 3)}
              </div>
              <h1 className="text-lg font-bold text-foreground hidden sm:block" data-testid="text-cooperative-name">
                {cooperativeName}
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  size="sm"
                  className="font-medium"
                  data-testid={`link-nav-${item.label.en.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label[currentLanguage as keyof typeof item.label]}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-5">
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48"
                  autoFocus
                  data-testid="input-search"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  data-testid="button-close-search"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="hidden sm:inline-flex"
                data-testid="button-open-search"
              >
                <Search className="h-4 w-4" />
              </Button>
            )}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1" data-testid="button-language">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLanguage.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={currentLanguage === lang.code ? "bg-accent" : ""}
                    data-testid={`option-language-${lang.code}`}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 animate-in fade-in slide-in-from-top-5">
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.label.en.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label[currentLanguage as keyof typeof item.label]}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
