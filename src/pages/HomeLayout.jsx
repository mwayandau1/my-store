import { Outlet, useNavigation } from "react-router-dom"
import { Header, Navbar, Loading } from "../components"
function HomeLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <div>
      <Header />
      <Navbar />
      {isLoading ? <Loading />
      :
      <section className="align-elements py-20">
      <Outlet />
      </section>}

    </div>
  )
}

export default HomeLayout