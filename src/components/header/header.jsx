import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image
          alt="logo"
          src={"/images/logo_black.png"}
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link legacyBehavior href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/events" passHref>
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about-us" passHref>
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>This is the title of the Page Home xd</h1>
    </header>
  );
};
