"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY_DATA } from "@/app/data/constants";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`w-10 h-10 rounded-lg overflow-hidden shadow-lg transition-colors ${
                scrolled
                  ? "bg-white"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              }`}
            >
              <Image
                src="/yordo.jpg"
                alt="元道分子"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div
                className={`text-xl font-bold leading-none transition-colors ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
              >
                元道分子
              </div>
              <div
                className={`text-xs uppercase tracking-wider transition-colors ${
                  scrolled ? "text-slate-500" : "text-blue-200"
                }`}
              >
                Yuandao Molecular
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors text-sm uppercase tracking-wide relative group ${
                  scrolled
                    ? pathname === link.path
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                    : pathname === link.path
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-blue-600" : "bg-white"
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20 shadow-lg"
                  : "bg-white text-blue-900 hover:bg-blue-50 shadow-black/20 shadow-lg"
              }`}
            >
              获取报价
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 animate-in slide-in-from-top-5">
            <div className="flex flex-col px-4 gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left py-3 px-2 border-b border-slate-50 ${
                    pathname === link.path
                      ? "text-blue-600 font-bold"
                      : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/yordo.jpg"
                  alt="元道分子"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-bold text-xl">元道分子</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              以分子科技为核心，致力于精细化学品的绿色合成与应用创新。
            </p>
            <div className="flex gap-4">
              {/* 社交图标占位 */}
              <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center text-white text-xs">
                W
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center text-white text-xs">
                L
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">
              产品系列
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                <Link href="/products" className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> 叔碳酸
                </Link>
              </li>
              <li className="cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                <Link href="/products" className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> 新癸酸乙烯酯
                </Link>
              </li>
              <li className="cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                <Link href="/products" className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> 环氧单体
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">
              公司概况
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                <Link href="/about" className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> 发展历程
                </Link>
              </li>
              <li className="cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                <Link href="/cases" className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> 成功案例
                </Link>
              </li>
              <li className="cursor-pointer hover:text-blue-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                <Link href="/contact" className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> 联系我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">
              联系方式
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{COMPANY_DATA.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{COMPANY_DATA.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{COMPANY_DATA.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 border-t border-slate-900 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_DATA.enName} All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-slate-400">
              隐私政策
            </span>
            <span className="cursor-pointer hover:text-slate-400">
              服务条款
            </span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400"
            >
              赣ICP备2020014627号-1
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
