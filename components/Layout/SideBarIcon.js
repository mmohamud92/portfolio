const SideBarIcon = ({ icon, href }) => {
      return (
            <a href={href} className="icon" target="_blank">
                  {icon}
            </a>
      );
};

export default SideBarIcon;
