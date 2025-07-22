import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-6 tracking-wider">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Esta página no existe
        </p>
        <p className="text-muted-foreground mb-8">
          La página que buscas no se encuentra disponible. Quizás fue movida o eliminada.
        </p>
        <Button asChild size="lg">
          <Link to="/">Volver al Inicio</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
