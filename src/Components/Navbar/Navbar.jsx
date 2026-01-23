import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const lastDir = useRef(0);

  useEffect(() => {
    const nav = navRef.current;

    ScrollTrigger.create({
      start: 100,
      end: document.body.scrollHeight,

      onUpdate: (self) => {
        if (self.direction === lastDir.current) return;

        // 🔽 scroll DOWN → hide
        if (self.direction === 1) {
          gsap.to(nav, {
            y: "-100%",
          });
        }

        // 🔼 scroll UP → ALWAYS come from top
        if (self.direction === -1) {
          gsap.fromTo(
            nav,
            { y: "-100%" },
            {
              y: "0%",
              duration: 0.35,
              ease: "linear",
            }
          );
        }

        lastDir.current = self.direction;
      }
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-9999 w-full h-[10vh]
                 flex justify-between items-center
                 bg-[#F1F1F1]/10 backdrop-blur-md p-6"
    >
      <div>image</div>
      <div className="flex gap-3 text-zinc-700">
        {["Home","About","Skills","Projects","Dsa","Resume","Contact"].map(
          (item, index) => (
            <a
              key={index}
              className="text-lg capitalize hover:bg-black hover:text-white
                         hover:rounded-full p-2 transition"
            >
              {item}
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
