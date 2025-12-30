import { useState } from 'react'
import { BASE_URL } from '../constants'
import './Dock.css'

interface DockIcon {
  id: string
  name: string
  icon: string
}

const dockIcons: DockIcon[] = [
  { id: 'finder', name: 'Finder', icon: 'finder.png' },
  { id: 'terminal', name: 'Terminal', icon: 'terminal.png' },
  { id: 'safari', name: 'Safari', icon: 'safari.png' },
  { id: 'github', name: 'GitHub', icon: 'github.svg' },
  { id: 'mail', name: 'Mail', icon: 'mail.png' },
  { id: 'trash', name: 'Trash', icon: 'trash.png' },
]

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
            <img
              src={`${BASE_URL}/images/${icon.icon}`}
              alt={icon.name}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dock
