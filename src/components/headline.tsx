import type { ReactNode, VFC } from 'react'

interface Props {
  actions?: ReactNode
  icon?: ReactNode
  label: string
}

const Headline: VFC<Props> = ({ actions, icon, label }) => {
  return (
    <header className="flex py-4 content-center">
      <h2 className="flex flex-grow flex-wrap font-bold items-center">
        {icon && <div className="flex-shrink mr-1">{icon}</div>}

        <span className="flex-grow">{label}</span>
      </h2>

      {actions && <div className="flex-shrink">{actions}</div>}
    </header>
  )
}

export default Headline
