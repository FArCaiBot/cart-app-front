import { TabMenu } from "primereact/tabmenu";
import { classNames } from "primereact/utils";
import { Link, useNavigate } from "react-router-dom";

const navConfig = [
  {
    label: "Home",
    icon: "pi pi-home",
    url: "/",
  },
  {
    label: "Cart",
    icon: "pi pi-shopping-cart",
    url: "/cart",
  },
];

export const Menu = () => {
  const navigate = useNavigate();

  const items = navConfig.map((navItem) => ({
    label: navItem.label,
    icon: navItem.icon,
    command: () => navigate(navItem.url),
  }));

  return <TabMenu model={items} />;
};
