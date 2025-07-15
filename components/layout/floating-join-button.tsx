'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function FloatingJoinButton() {
  const pathname = usePathname();
  
  // Hide on join page
  if (pathname === '/join') {
    return null;
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Button
        asChild
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg glow-button text-white"
      >
        <Link href="/join">
          <Plus className="h-6 w-6" />
        </Link>
      </Button>
    </motion.div>
  );
}