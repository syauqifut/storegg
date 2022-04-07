import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'setting'
}
export default function Sidebar(props: SidebarProps) {
  const {activeMenu} = props;
  return (
    <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="Overview" icon="menu-overview" active={activeMenu === 'overview'} url="/member"/>
            <MenuItem title="Transaction" icon="menu-transaction" active={activeMenu === 'transactions'} url="/member/transactions"/>
            <MenuItem title="Card" icon="menu-card" url="/member"/>
            <MenuItem title="Reward" icon="menu-reward" url="/member"/>
            <MenuItem title="Setting" icon="menu-setting" active={activeMenu === 'setting'} url="/member/edit-profile"/>
            <MenuItem title="Log Out" icon="menu-logout" url="/sign-in"/>
          </div>
          <Footer />
        </div>
      </section>
  )
}
