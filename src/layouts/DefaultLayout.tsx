import NavigationDrawer from "@/components/layouts/NavigationDrawer";
import { usePanelRedirect } from "@/hooks/useAuthRedirect";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  usePanelRedirect();

  return (
    <>
      <NavigationDrawer>
        <main>{children}</main>
      </NavigationDrawer>
    </>
  );
};

export default DefaultLayout;
