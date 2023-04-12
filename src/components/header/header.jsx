
import Link from "next/link"
export const Header = () =>{
    return(
      <header>
        <nav>
          <Link legacyBehavior href="/" passHref>
            <a>Home</a>
          </Link>
          <Link legacyBehavior href="/events" passHref>
            <a>Events</a>
          </Link>
          <Link legacyBehavior href="/about-us" passHref>
            <a >About Us</a>
          </Link>
        </nav>
      </header>
    )
}