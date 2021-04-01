import { Link } from 'react-router-dom';
const NoMatch = () => {
  return (
    <>
      <h1>404 page not found</h1>
      <Link to='/'>
        Return home
      </Link>
    </>
  )
}
export default NoMatch;