import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-white text-center">
        <div className="mb-8 animate-float">
          <h1 className="text-9xl font-bold  mb-2">404</h1>
        </div>
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-family-integral-bold">Page Not Found</h2>
          <p className="text-gray-400">
            {
              "The page you're looking for seems to have vanished into the digital void."
            }
          </p>
          <Link href="/casual">
              <Button
                className="px-6 py-3 bg-white cursor-pointer text-black font-medium rounded-lg transition-transform hover:scale-105 active:scale-95"
              >
                Go Back
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
