"use client";

import { useState, useEffect } from 'react';

interface ViewedItems {
  [key: string]: boolean;
}

export function useViewedItems() {
  const [viewedItems, setViewedItems] = useState<ViewedItems>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from cookies on client side
    if (typeof window !== 'undefined') {
      const cookies = document.cookie.split(';');
      const viewedCookie = cookies.find(cookie => 
        cookie.trim().startsWith('viewed_items=')
      );
      
      if (viewedCookie) {
        try {
          const viewedData = JSON.parse(
            decodeURIComponent(viewedCookie.split('=')[1])
          );
          setViewedItems(viewedData);
        } catch (error) {
          console.error('Error parsing viewed items cookie:', error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  const markAsViewed = (itemId: string) => {
    const newViewedItems = { ...viewedItems, [itemId]: true };
    setViewedItems(newViewedItems);
    
    // Save to cookies (expires in 30 days)
    if (typeof window !== 'undefined') {
      const expires = new Date();
      expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000));
      document.cookie = `viewed_items=${encodeURIComponent(JSON.stringify(newViewedItems))}; expires=${expires.toUTCString()}; path=/`;
    }
  };

  const isViewed = (itemId: string): boolean => {
    return !!viewedItems[itemId];
  };

  const hasNewItems = (itemIds: string[]): boolean => {
    return itemIds.some(id => !isViewed(id));
  };

  return {
    isViewed,
    markAsViewed,
    hasNewItems,
    isLoaded
  };
}
