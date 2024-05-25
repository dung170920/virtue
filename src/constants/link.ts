import { Category, MoneySend, Moneys, ProfileCircle } from "iconsax-react";
import { PATH } from "./path";
import { CampaignIcon } from "@/components/icons";

export const LINKS = [
  {
    path: PATH.dashboard,
    name: "Dashboard",
    icon: Category,
  },
  {
    path: PATH.campaign,
    name: "Campaign",
    icon: CampaignIcon,
  },
  {
    path: PATH.payment,
    name: "Payment",
    icon: Moneys,
  },
  {
    path: PATH.withdraw,
    name: "Withdraw",
    icon: MoneySend,
  },
  {
    path: PATH.profile,
    name: "Profile",
    icon: ProfileCircle,
  },
  // {
  //   path: PATH.campaign,
  //   name: "Logout",
  //   icon: Element3
  // },
];
