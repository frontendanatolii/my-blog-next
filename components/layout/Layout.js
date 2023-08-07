import { MainNavigation } from "./MainNavigation/MainNavigation"

export const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>
        {props.children}
      </main>
    </>
  )
}