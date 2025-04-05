"use client";

import Link from "next/link";
import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full fixed bottom-0 left-0 right-0 z-10 bg-transparent">
            <div className="w-full mx-auto max-w-screen-xl p-4 text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    © 2025 <Link href=" " className="hover:underline">David.wealth™</Link>. All Rights Reserved.
                </div>
                <div className="flex justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <Link href="#" className="hover:underline">About</Link>
                    <span className="mx-2">|</span>
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                    <span className="mx-2">|</span>
                    <Link href="#" className="hover:underline">Licensing</Link>
                    <span className="mx-2">|</span>
                    <Link href="#" className="hover:underline">Contact</Link>
                </div>
            </div>
        </footer>
    );
}