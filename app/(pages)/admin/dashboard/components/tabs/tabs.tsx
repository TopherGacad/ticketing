"use client";

import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineQueueList } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

type Variant = 'Tickets' | 'Setup';

interface TabProps {
    variant: Variant;
}

export default function Tabs({ variant }: TabProps) {
    const router = useRouter();
    const pathname = usePathname();  // Get the current route path

    const ticketItems = [
        { title: "New Ticket", icon: <IoMdAddCircleOutline />, route: "/admin/dashboard/tickets/new-ticket" },
        { title: "Queue", icon: <HiOutlineQueueList />, route: "/admin/dashboard/tickets/queue" },
        { title: "Resolved", icon: <IoMdCheckmarkCircleOutline />, route: "/admin/dashboard/tickets/resolved" }
    ];

    const setupItems = [
        { title: "Department", icon: <IoMdAddCircleOutline />, route: "/admin/dashboard/setup/departments" },
        { title: "Categories", icon: <HiOutlineQueueList />, route: "/admin/dashboard/setup/categories" },
        { title: "New Account", icon: <IoMdCheckmarkCircleOutline />, route: "/admin/dashboard/setup/accounts" },
        { title: "User Profile", icon: <IoMdCheckmarkCircleOutline />, route: "/admin/dashboard/setup/profiles" }
    ];

    const handleNavigation = (route: string) => {
        router.push(route);  // Navigate to the selected route
    };

    return (
        <>
            <div className="bg-[#EFEFEF] h-full w-full flex items-center">
                <ul className="flex h-full bg-[#D9D9D9] text-[#797979]">
                    {variant === 'Tickets' ? ticketItems.map((item) => (
                        <li key={item.title}
                            className={`flex justify-center items-center cursor-pointer w-[150px] ${pathname === item.route ? "bg-[#fafafa] text-[#352F36]" : ""}`}
                            onClick={() => handleNavigation(item.route)}>
                            {item.icon}
                            {item.title}
                        </li>
                    )) : setupItems.map((item) => (
                        <li key={item.title}
                            className={`flex justify-center items-center cursor-pointer w-[150px] ${pathname === item.route ? "bg-[#fafafa] text-[#352F36]" : ""}`}
                            onClick={() => handleNavigation(item.route)}>
                            {item.icon}
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}