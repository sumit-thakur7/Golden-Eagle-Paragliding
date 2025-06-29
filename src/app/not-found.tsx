import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 sm:h-16 sm:w-16">
            <AlertTriangle className="h-8 w-8 text-destructive sm:h-10 sm:w-10" />
          </div>
          <CardTitle className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
            404 - Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Oops! It looks like the page you're looking for doesn't exist.
            Maybe it was moved, or you mistyped the address.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">Go Back to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
