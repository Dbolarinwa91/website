"use client";

import Link from "next/link";
import '@/app/globals.css';
import React from 'react';

export default function Footer() {
    return (
        <footer className="container mx-auto px-8 border-t border-gray-400 mt-12 py-6 text-center sm:flex items-center justify-between">
            <p>© 2025 GreatStack. All rights reserved.</p>
            <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com"
                        aria-label="Visit our GitHub profile"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com"
                        aria-label="Visit our LinkedIn profile"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com"
                        aria-label="Visit our Twitter profile"
                    >
                        Twitter
                    </a>
                </li>
            </ul>
        </footer>
    );
}
