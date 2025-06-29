import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <CardTitle className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
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
