'use client'
import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

export function QrCode({ value, size = 96, className }: { value: string; size?: number; className?: string }) {
  const [src, setSrc] = useState<string>('')
  useEffect(() => {
    QRCode.toDataURL(value, {
      margin: 0,
      width: size * 2,
      color: { dark: '#0f1521', light: '#ffffff' },
      errorCorrectionLevel: 'M',
    })
      .then(setSrc)
      .catch(() => setSrc(''))
  }, [value, size])

  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      aria-label="Verification QR code"
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="Verification QR code" width={size} height={size} style={{ display: 'block', borderRadius: 6 }} />
      ) : (
        <div style={{ width: size, height: size, borderRadius: 6, background: '#fff' }} />
      )}
    </div>
  )
}
