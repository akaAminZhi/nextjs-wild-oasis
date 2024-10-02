import SideNavigation from "@/app/_components/SideNavigation";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation></SideNavigation>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
