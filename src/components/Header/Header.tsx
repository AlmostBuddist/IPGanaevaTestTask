import { urls } from '@/consts'
import { Button } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import cn from 'classnames'

interface IHeader {
  goBack?: string
  className?: cn.Argument
}

const Header: React.FC<IHeader> = ({ goBack, className }) => {
  return (
    <div className={cn('header', className)}>
      <Link to={goBack || urls.root}>
        <Button className="go-back">Назад</Button>
      </Link>
    </div>
  )
}

export default Header
