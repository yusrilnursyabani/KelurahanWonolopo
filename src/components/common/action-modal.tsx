"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message?: string;
  type?: "success" | "error" | "warning" | "info";
  confirmText?: string;
}

export function ActionModal({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
  confirmText = "Mengerti",
}: ActionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-2xl text-card-foreground z-10 space-y-4 text-center"
          >
            {/* Icon Graphic Header */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              {type === "success" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.div>
              )}
              {type === "error" && (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <XCircle className="h-8 w-8" />
                </div>
              )}
              {type === "warning" && (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <AlertTriangle className="h-8 w-8" />
                </div>
              )}
              {type === "info" && (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Info className="h-8 w-8" />
                </div>
              )}
            </div>

            {/* Title & Message */}
            <div className="space-y-1.5">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {title}
              </h3>
              {message && (
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {message}
                </p>
              )}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Button
                onClick={onClose}
                className="w-full rounded-2xl font-bold h-10 text-xs shadow-xs"
              >
                {confirmText}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
