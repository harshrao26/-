'use client';

import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

export default function ShareButtons({ url, title }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    const shareLinks = [
        {
            name: 'Facebook',
            icon: <Facebook className="w-5 h-5" />,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            name: 'Twitter',
            icon: <Twitter className="w-5 h-5" />,
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            color: 'bg-sky-500 hover:bg-sky-600'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
            color: 'bg-blue-700 hover:bg-blue-800'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                </div>

                <div className="flex gap-3">
                    {shareLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 text-white rounded-full transition-colors ${link.color}`}
                            aria-label={`Share on ${link.name}`}
                        >
                            {link.icon}
                        </a>
                    ))}

                    <button
                        onClick={handleCopy}
                        className={`p-3 rounded-full transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        aria-label="Copy link"
                    >
                        <LinkIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
            {copied && (
                <p className="text-center text-sm text-green-600 mt-2 font-medium">Link copied to clipboard!</p>
            )}
        </div>
    );
}
