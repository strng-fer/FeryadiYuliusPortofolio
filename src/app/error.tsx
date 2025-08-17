"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-center">
        <h1 className="font-headline text-8xl font-bold text-primary text-shadow-pixel">500</h1>
        <h2 className="mt-4 text-3xl font-semibold">Game Over!</h2>
        <p className="mt-2 text-lg text-muted-foreground">
            Looks like the server stumbled upon a critical bug.
        </p>
        <Button
            onClick={() => reset()}
            className="mt-6"
        >
            Try Again
        </Button>
    </div>
  )
}
