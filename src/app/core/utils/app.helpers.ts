export interface MenuChild {
  name: string;
  title: string;
  path: string;
  toAccess: string[];
}

export interface MenuSubItem {
  name: string;
  title: string;
  path?: string;
  children: MenuChild[];
  toAccess: string[];
}

export interface MenuItem {
  name: string;
  title: string;
  icon: string;
  path?: string;
  submenu: MenuSubItem[];
  toAccess: string[];
}

export const filterByUserAccess = (
  menuItems: MenuItem[],
  userType: string
): MenuItem[] => {
  return menuItems
    .filter((item) => item.toAccess.includes(userType ?? '')) // Filter based on userType at the top level
    .map((item) => {
      // Recursively filter the submenu
      const filteredSubmenu = (item.submenu || [])
        .filter((subItem) => subItem.toAccess.includes(userType))
        .map((subItem) => {
          const filteredChildren = (subItem.children || []).filter((child) =>
            child.toAccess.includes(userType)
          );

          return {
            ...subItem,
            ...(filteredChildren.length > 0 && { children: filteredChildren }),
          };
        });

      // Return the filtered item and only include submenu if they have valid items
      return {
        ...item,
        ...(filteredSubmenu.length > 0 && { submenu: filteredSubmenu }),
      };
    });
};
