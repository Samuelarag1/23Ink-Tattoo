import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'dots' | 'lines' | 'ink' | 'geometric';
  className?: string;
}

export function SectionDivider({ variant = 'dots', className = '' }: SectionDividerProps) {
  const variants = {
    dots: (
      <div className="flex justify-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    ),
    lines: (
      <div className="flex items-center justify-center space-x-4">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent to-border w-16"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="w-3 h-3 border border-border rotate-45"
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: 45, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="h-px bg-gradient-to-l from-transparent to-border w-16"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    ),
    ink: (
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <svg
          width="120"
          height="20"
          viewBox="0 0 120 20"
          className="text-border"
          fill="currentColor"
        >
          <path d="M10 10 Q30 2, 50 10 T90 10 Q100 15, 110 10" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
          />
          <circle cx="20" cy="8" r="1.5" />
          <circle cx="40" cy="12" r="1" />
          <circle cx="70" cy="7" r="1.5" />
          <circle cx="100" cy="13" r="1" />
        </svg>
      </motion.div>
    ),
    geometric: (
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-4 h-4 border-2 border-primary"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 45 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="w-1 h-12 bg-gradient-to-b from-primary to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="w-6 h-6 border border-primary rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="w-1 h-12 bg-gradient-to-b from-primary to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="w-4 h-4 border-2 border-primary"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 45 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    )
  };

  return (
    <motion.div
      className={`py-12 flex justify-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {variants[variant]}
    </motion.div>
  );
}
