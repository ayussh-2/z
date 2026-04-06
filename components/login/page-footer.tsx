export function LoginPageFooter() {
    return (
        <footer className="w-full py-8 mt-auto flex flex-col md:flex-row justify-between items-center px-12 gap-4 bg-transparent relative z-10">
            <p className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant">
                © 2024 WealthLink Private Banking. Secure Encrypted Session.
            </p>
            <div className="flex gap-6">
                <a
                    className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    href="#"
                >
                    Privacy Policy
                </a>
                <a
                    className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    href="#"
                >
                    Security Standards
                </a>
                <a
                    className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    href="#"
                >
                    Terms of Service
                </a>
            </div>
        </footer>
    );
}
