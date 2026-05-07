export function Footer() {
    return (
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-display text-sm tracking-widest uppercase text-muted-foreground">
            © {new Date().getFullYear()} Juan Sebastian Ossa — All rights reserved
          </p>
        </div>
      </footer>
    );
  }
  