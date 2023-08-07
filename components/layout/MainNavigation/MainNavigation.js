import Link from "next/link";
import classes from './MainNavigation.module.css'
import { Logo } from "../Logo/Logo";

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
          <Link href='/contact'>Contact me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}