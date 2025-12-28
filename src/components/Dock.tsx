import { useState } from 'react'
import './Dock.css'

interface DockIcon {
  id: string
  name: string
  icon: string
}

const dockIcons: DockIcon[] = [
  { id: 'finder', name: 'Finder', icon: '/images/finder.png' },
  { id: 'terminal', name: 'Terminal', icon: '/images/terminal.png' },
  { id: 'safari', name: 'Safari', icon: '/images/safari.png' },
  { id: 'github', name: 'GitHub', icon: '/icons/github.svg' },
  { id: 'trash', name: 'Trash', icon: '/images/trash.png' },
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
            <img src={icon.icon} alt={icon.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dock
