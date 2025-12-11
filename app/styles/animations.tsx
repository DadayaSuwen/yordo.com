export const AnimationStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.1); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-700 { animation-delay: 0.7s; }

    .bg-grid-pattern {
      background-image: radial-gradient(#3B82F6 1px, transparent 1px);
      background-size: 24px 24px;
    }

    /* 滚动显现效果类 */
    .reveal-hidden {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* 时间轴样式 */
    .timeline-line::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      background: #e2e8f0;
      transform: translateX(-50%);
    }
    @media (max-width: 768px) {
      .timeline-line::before {
        left: 20px;
      }
    }
  `}</style>
);