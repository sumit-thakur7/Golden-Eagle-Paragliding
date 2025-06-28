export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GEP Paragliding. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
