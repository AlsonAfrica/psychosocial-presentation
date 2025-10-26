import React, { useEffect, useRef } from 'react';
import "../Styles/footer.css"

interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  speed: number;
  drift: number;
  size: number;
}

const FloatingLeavesFooter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leavesRef = useRef<Leaf[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Theory', href: '#theory' },
    { name: 'Intervention', href: '#intervention' },
    { name: 'Stories', href: '#stories' },
    { name: 'Accessibility', href: '#accessibility' },
    { name: 'Resources', href: '#resources' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize leaves
    const initLeaves = () => {
      leavesRef.current = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        rotation: Math.random() * 360,
        speed: 0.3 + Math.random() * 0.5,
        drift: Math.random() * 0.5 - 0.25,
        size: 20 + Math.random() * 15
      }));
    };
    initLeaves();

    // Draw leaf
    const drawLeaf = (leaf: Leaf) => {
      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate((leaf.rotation * Math.PI) / 180);
      
      // Draw leaf shape
      ctx.beginPath();
      ctx.moveTo(0, -leaf.size / 2);
      ctx.quadraticCurveTo(leaf.size / 3, -leaf.size / 4, leaf.size / 2, 0);
      ctx.quadraticCurveTo(leaf.size / 3, leaf.size / 4, 0, leaf.size / 2);
      ctx.quadraticCurveTo(-leaf.size / 3, leaf.size / 4, -leaf.size / 2, 0);
      ctx.quadraticCurveTo(-leaf.size / 3, -leaf.size / 4, 0, -leaf.size / 2);
      ctx.closePath();
      
      // Leaf color with transparency
      ctx.fillStyle = `rgba(139, 195, 74, ${0.3 + Math.random() * 0.3})`;
      ctx.fill();
      
      // Leaf vein
      ctx.strokeStyle = `rgba(104, 159, 56, ${0.4 + Math.random() * 0.2})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -leaf.size / 2);
      ctx.lineTo(0, leaf.size / 2);
      ctx.stroke();
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      leavesRef.current.forEach((leaf) => {
        // Update position
        leaf.y += leaf.speed;
        leaf.x += leaf.drift;
        leaf.rotation += 0.5;

        // Reset leaf when it goes off screen
        if (leaf.y > canvas.height + leaf.size) {
          leaf.y = -leaf.size;
          leaf.x = Math.random() * canvas.width;
        }

        // Wrap horizontally
        if (leaf.x > canvas.width + leaf.size) leaf.x = -leaf.size;
        if (leaf.x < -leaf.size) leaf.x = canvas.width + leaf.size;

        drawLeaf(leaf);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <footer className="footer-wrapper">
        <canvas ref={canvasRef} className="footer-canvas" />
        
        <div className="footer-content">
          <div className="footer-topic">
            <h2 className="footer-topic-title">Racism & Xenophobia in South Africa</h2>
            <p className="footer-topic-subtitle">Understanding, addressing, and transforming our communities</p>
          </div>

          <nav className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.name} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} By Alson Radebe.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FloatingLeavesFooter;