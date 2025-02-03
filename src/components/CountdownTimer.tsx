'use client'

import { useEffect, useState } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  return timeLeft
}

type CountdownTimerProps = {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return null
  }

  const timeUnits = [
    { label: 'Ngày', value: timeLeft.days },
    { label: 'Giờ', value: timeLeft.hours },
    { label: 'Phút', value: timeLeft.minutes },
    { label: 'Giây', value: timeLeft.seconds }
  ]

  return (
    <div className="grid grid-cols-4 gap-8 md:gap-16 max-w-4xl mx-auto">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="text-5xl md:text-7xl font-bold text-rose-700 mb-1">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-500 uppercase tracking-wider">{label}</div>
        </div>
      ))}
    </div>
  )
} 