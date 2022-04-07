import cx from 'classnames';
import Image from "next/image";
import Link from 'next/link';

interface MenuItemProps {
    title: string;
    icon: "menu-card" | "menu-logout" | "menu-message" | "menu-overview" | "menu-reward" | "menu-setting" | "menu-transaction";
    active?: boolean;
    url: string
}
export default function MenuItem(props: Partial<MenuItemProps>) {
    const {title, icon, active, url} = props;
    const classTitle = cx({
        'item': true,
        'mb-30': true,
        active,
      });
  return (
    <div className={classTitle}>
        <div className="me-3">
            <Image src={`/icon/${icon}.svg`} width={25} height={25} />
        </div>
        <p className="item-title m-0">
            <Link href={`${url}`}>
                <a className="text-lg text-decoration-none">{title}</a>
            </Link>
        </p>
    </div>
  )
}
