'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LocationFinder() {
  const [location, setLocation] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const getLocation = () => {
    setLoading(true)
    setError(null)

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
          const data = await response.json()
          setLocation(data.display_name)
          localStorage.setItem("country",data.address.country_code)
        } catch (err) {
          setError('Failed to get location name')
        } finally {
          setLoading(false)
        }
      },
      () => {
        setError('Unable to retrieve your location')
        setLoading(false)
      }
    )
  }
useEffect(()=>{getLocation()},[])


  return (
    <Card className="w-full max-w-md mx-auto hidden">
      <CardHeader>
        <CardTitle>Location Finder</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={getLocation} disabled={loading}>
          {loading ? 'Getting location...' : 'Get My Location'}
        </Button>
        {location && (
          <p className="mt-4">Your location: {location}</p>
        )}
        {error && (
          <p className="mt-4 text-red-500">{error}</p>
        )}
      </CardContent>
    </Card>
  )
}

