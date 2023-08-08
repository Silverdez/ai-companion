'use client';
import {Home, Plus, Settings} from "lucide-react";
import {cn} from "@/lib/utils";
import {usePathname, useRouter} from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter()

    const routes = [
        {
            icon: Home,
            href: '/',
            label: 'Home',
            pro: false
        },
        {
            icon: Plus,
            href: '/companion/new',
            label: 'Create',
            pro: true
        },
        {
            icon: Settings,
            href: '/settings',
            label: 'Settings',
            pro: false
        }
    ];

    const onNavigate = (url: string, pro: boolean) => {
        return router.push(url)
    }

    return (
        <div className={`flex flex-col h-full space-y-4 text-primary bg-secondary`}>
            <div className={`flex flex-1 p-3 justify-center`}>
                <div className={`space-y-2`}>
                    {routes.map((route, i) => {
                        return (
                            <div onClick={() => onNavigate(route.href, route.pro)}
                                key={route.href}
                                className={cn(
                                    `text-muted-foreground text-xs group flex p-2 w-full justify-start font-medium cursor-pointer rounded-lg transition duration-200 ease-in-out hover:bg-primary/10 hover:text-primary`,
                                    pathname === route.href ? `bg-primary/10 text-primary` : ``
                                )}
                            >
                                <div className={`flex flex-col gap-y-2 items-center flex-1`}>
                                    {route.icon && (
                                        <route.icon className={`h-5 w-5`} />
                                    )}
                                    <span className={`group-hover:text-primary`}>
                                        {route.label}
                                    </span>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;