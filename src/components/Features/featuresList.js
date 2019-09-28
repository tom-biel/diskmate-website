import hideIcon from "../../images/hide.svg"
import lightDarkModeIcon from "../../images/light-dark-mode.svg"
import keyboardIcon from "../../images/keyboard.svg"
import ejectIcon from "../../images/eject.svg"
import statusBarIcon from "../../images/statusbar.svg"
import ignoreIcon from "../../images/ignore.svg"
 
 const featuresList = [
  {
    title: "Eject All",
    description: "Eject all removable drives with one click of a button.",
    icon: ejectIcon,
  },
  {
    title: "Global Shortcut",
    description: "Create global shortcut to eject all drives. ",
    icon: keyboardIcon,
  },
  {
    title: "Hide Drives",
    description: "Hide drives not to be visible in the default list.",
    icon: hideIcon,
  },
  {
    title: "Ignore",
    description: `Exclude drives from eject all feature.`,
    icon: ignoreIcon,
  },
  {
    title: "Status Bar",
    description: `Launches on system startup and is accessible from Status Bar for quick access`,
    icon: statusBarIcon,
  },
  {
    title: "Dark Mode",
    description: `DiskMate supports native macOS Dark and Light Appearance.`,
    icon: lightDarkModeIcon,
  },
];


export default featuresList;
