import styles from './NavDropdown.module.scss'
import Link from 'next/link'

export default function NavDropdown({ title }) {
  return (
  	<div className="NavDropdown">
  		<div>
  			<p>Components</p>
  		</div>
  		<ul>
  			<li>
  				<Link href="/">
			        	<a>Home (Blank Example)</a>
			        </Link>
  			</li>
  			<li>
  				<Link href="/FixedSplit">
			        	<a>FixedSplit</a>
			        </Link>
  			</li>
  			<li>
  				<Link href="/BasicForm">
			        	<a>BasicForm</a>
			        </Link>
  			<li>
  		</ul>
  	</div>
  )
}
