const SideBarIcon = ({ icon, href }) => {
      return (
            <a href={href} className="hidden icon md:block" target="_blank">
                  {icon}
            </a>
      );
};

export default SideBarIcon;
