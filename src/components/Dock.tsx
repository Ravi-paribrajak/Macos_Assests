import { useState } from 'react'
import './Dock.css'

interface DockIcon {
  id: string
  name: string
  icon: string
}

const dockIcons: DockIcon[] = [
  { id: 'finder', name: 'Finder', icon: 'finder' },
  { id: 'terminal', name: 'Terminal', icon: 'terminal' },
  { id: 'safari', name: 'Safari', icon: 'safari' },
  { id: 'github', name: 'GitHub', icon: 'github' },
  { id: 'trash', name: 'Trash', icon: 'trash' },
]

function IconRenderer({ icon }: { icon: string }) {
  switch (icon) {
    case 'finder':
      return (
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="256" height="256" rx="60" fill="#E0E0E0" />
          <path d="M80 100L128 60L176 100V200H80V100Z" fill="#4A90E2" stroke="#2E5C8A" strokeWidth="2" />
          <circle cx="110" cy="130" r="12" fill="#2E5C8A" />
        </svg>
      )
    case 'terminal':
      return (
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="256" height="256" rx="60" fill="#1a1a1a" />
          <g stroke="#00FF00" strokeWidth="3" strokeLinecap="round">
            <path d="M60 100L100 140" />
            <path d="M100 100L60 140" />
          </g>
          <line x1="120" y1="140" x2="200" y2="140" stroke="#00FF00" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case 'safari':
      return (
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="256" height="256" rx="60" fill="#C7B3E5" />
          <circle cx="128" cy="128" r="60" stroke="#663399" strokeWidth="3" fill="none" />
          <circle cx="128" cy="128" r="8" fill="#663399" />
          <circle cx="170" cy="90" r="6" fill="#FF6B6B" opacity="0.7" />
          <circle cx="180" cy="120" r="6" fill="#FFD700" opacity="0.7" />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="256" height="256" rx="60" fill="#1a1a1a" />
          <path
            d="M128 50C83 50 50 83 50 128C50 165 75 195 110 205C115 206 118 202 118 199V180C90 186 85 168 85 168C80 155 72 152 72 152C60 147 73 148 73 148C87 149 95 157 95 157C107 174 125 169 133 166C135 159 138 149 145 146C110 143 72 130 72 95C72 83 77 73 95 64C93 55 82 44 95 31C95 31 110 27 128 39C142 35 157 35 171 39C189 27 204 31 204 31C217 44 206 55 204 64C222 73 227 83 227 95C227 130 189 143 154 146C161 150 168 158 168 169V199C168 202 171 206 176 205C211 195 236 165 236 128C236 83 203 50 128 50Z"
            fill="#fff"
          />
        </svg>
      )
    case 'trash':
      return (
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="256" height="256" rx="60" fill="#9E9E9E" />
          <path d="M80 100H176V200C176 208 170 214 162 214H94C86 214 80 208 80 200V100Z" stroke="#424242" strokeWidth="2" fill="none" />
          <rect x="85" y="85" width="86" height="18" stroke="#424242" strokeWidth="2" fill="none" />
          <line x1="110" y1="120" x2="110" y2="190" stroke="#424242" strokeWidth="2" />
          <line x1="146" y1="120" x2="146" y2="190" stroke="#424242" strokeWidth="2" />
        </svg>
      )
    default:
      return null
  }
}

function Dock() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <div className="dock-container">
      <div className="dock">
        {dockIcons.map((icon) => (
          <div
            key={icon.id}
            className={`dock-icon ${hoveredIcon === icon.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIcon(icon.id)}
            onMouseLeave={() => setHoveredIcon(null)}
            title={icon.name}
          >
            <IconRenderer icon={icon.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dock
