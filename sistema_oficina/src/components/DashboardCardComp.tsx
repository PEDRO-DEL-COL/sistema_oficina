"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface DashboardCardProps {
    title: string;
    icon: ReactNode;
    href: string;
}

export default function DashboardCardComp ({ title, icon, href }: DashboardCardProps) {
    return (
        <Link href={href}>
            <motion.div
                whileHover = {{ scale: 1.05 }}
                whileTap = {{ scale: 0.98 }}
                className = "flex flex-col items-center justify-center p-12 rounded-2xl shadow-md bg-white hover:shadow-lg transition cursor-pointer"
            >
                <div className = "text-4xl mb-3 text-gray-700">{icon}</div>
                <h2 className = "text-lg font-semibold text-gray-800">{title}</h2>
            </motion.div>
        </Link>
    );
}