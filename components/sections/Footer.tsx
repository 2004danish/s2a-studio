import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
            S2A STUDIO
          </Link>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            A premium architectural design and master planning studio dedicated to creating scalable, visionary environments.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold mb-6 tracking-wide uppercase text-sm text-gray-500">Navigation</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/projects" className="hover:text-white transition-colors">Selected Work</Link></li>
            <li><Link href="/studio" className="hover:text-white transition-colors">Studio & Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h4 className="font-semibold mb-6 tracking-wide uppercase text-sm text-gray-500">Connect</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="mailto:hello@s2astudio.in" className="hover:text-white transition-colors">hello@s2astudio.in</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} S2A Studio. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-mono text-xs">Built for scale.</p>
      </div>
    </footer>
  );
}