import Link from 'next/link'
import classNames from 'classnames'

const ButtonLink = ({ href, color = 'violet-red', children }) => (
  <Link href={href}>
    <a className={classNames('btn', `btn-${color} tra-${color}-hover`)}>{children}</a>
  </Link>
)

export default ButtonLink
