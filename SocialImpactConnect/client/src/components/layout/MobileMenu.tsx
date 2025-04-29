import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ name: string; href: string }>;
  currentPath: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  navItems,
  currentPath
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map(item => (
          <Link key={item.name} href={item.href}>
            <a 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                currentPath === item.href
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-600 hover:text-primary-600 hover:bg-primary-50"
              }`}
              onClick={onClose}
            >
              {item.name}
            </a>
          </Link>
        ))}
        <Link href="/donate">
          <a onClick={onClose}>
            <Button className="w-full mt-2">
              Donate Now
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
