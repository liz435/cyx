"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const photos = [
  {
    id: 1,
    url: "/friends-birthday-party.png",
    caption: "Celebrating with friends",
  },
  {
    id: 2,
    url: "/birthday-cake-candles.png",
    caption: "Making a wish",
  },
  {
    id: 3,
    url: "/festive-birthday-decorations.png",
    caption: "Party vibes",
  },
  {
    id: 4,
    url: "/happy-birthday-portrait.jpg",
    caption: "Special moments",
  },
  {
    id: 5,
    url: "/birthday-gifts-and-presents.jpg",
    caption: "Gifts and surprises",
  },
  {
    id: 6,
    url: "/birthday-celebration-outdoors.jpg",
    caption: "Outdoor adventures",
  },
]

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Memory Lane
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of wonderful moments from over the years
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => setSelectedPhoto(index)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeIn 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={photo.url || "/placeholder.svg"}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-primary-foreground font-medium text-sm sm:text-base">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for full view */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-foreground/80 hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img
                src={photos[selectedPhoto].url || "/placeholder.svg"}
                alt={photos[selectedPhoto].caption}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              
              <p className="text-center mt-4 text-lg text-muted-foreground">
                {photos[selectedPhoto].caption}
              </p>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPhoto((prev) =>
                      prev === 0 ? photos.length - 1 : (prev ?? 0) - 1
                    )
                  }}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Previous
                </button>
                <span className="text-muted-foreground">
                  {selectedPhoto + 1} / {photos.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPhoto((prev) =>
                      prev === photos.length - 1 ? 0 : (prev ?? 0) + 1
                    )
                  }}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
