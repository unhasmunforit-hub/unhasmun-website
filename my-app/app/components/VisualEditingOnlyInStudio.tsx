'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { VisualEditing } from 'next-sanity/visual-editing';

export default function VisualEditingOnlyInStudio() {
    const [inStudio, setInStudio] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Detect if we are inside an iframe (Sanity Studio Presentation Tool)
        const isIframe = window.self !== window.top;
        
        // Also check if sanity-preview-secret is present in the URL
        const hasPreviewSecret = searchParams.has('sanity-preview-secret');

        if (isIframe || hasPreviewSecret) {
            setInStudio(true);
        } else {
            setInStudio(false);
        }
    }, [pathname, searchParams]);

    // If we're not in the Studio context, we render nothing
    if (!inStudio) return null;

    return <VisualEditing />;
}
