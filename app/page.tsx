"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  Factory,
  Microscope,
  Globe,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { AnimationStyles } from "@/app/styles/animations";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { PRODUCTS } from "@/app/data/constants";

export default function HomePage() {
  useScrollReveal();

  const features = [
    {
      icon: <Factory className="w-6 h-6 text-blue-400" />,
      title: "产能优势",
      desc: "年产20万吨级现代化装置，DCS自动化控制",
    },
    {
      icon: <Microscope className="w-6 h-6 text-blue-400" />,
      title: "研发创新",
      desc: "博士领衔团队，多项合成工艺发明专利",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "全球供应",
      desc: "服务于关西涂料、三菱化学等国际巨头",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: "品质认证",
      desc: "ISO9001认证，严格的每批次质检溯源",
    },
  ];
  // 动态加载图标组件
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Beaker: <Beaker className="w-10 h-10 text-white" />,
      FlaskConical: <Beaker className="w-10 h-10 text-white" />,
      ShieldCheck: <ShieldCheck className="w-10 h-10 text-white" />,
    };
    return icons[iconName] || <Beaker className="w-10 h-10 text-white" />;
  };

  return (
    <>
      <AnimationStyles />

      {/* 1. 沉浸式动态 Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
        {/* 动态背景层 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[url('/yordo.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          {/* 网格装饰 */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              专注分子化学创新十年
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
              重塑
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                分子结构
              </span>
              <br />
              定义化工未来
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed animate-fade-in-up delay-200 border-l-2 border-blue-500 pl-6">
              作为全球领先的叔碳酸及衍生物制造商，我们为涂料、医药及新材料行业提供
              <span className="text-white font-semibold"> 高纯度、高性能 </span>
              的精细化工解决方案。
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link
                href="/products"
                className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 hover:-translate-y-1"
              >
                探索产品系列
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/cases"
                className="bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all hover:-translate-y-1"
              >
                查看成功案例
              </Link>
            </div>
          </div>

          {/* 右侧动态分子图示 */}
          <div className="hidden md:block relative h-[400px] animate-float">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-indigo-600 w-32 h-32 rounded-xl shadow-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 z-20">
              <Beaker className="w-16 h-16 text-white" />
            </div>
            {/* 悬浮卡片 */}
            <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10 text-white text-sm z-30 animate-pulse-glow">
              <div className="font-bold">纯度 &gt;99.9%</div>
              <div className="text-xs text-blue-200">HPLC 检测</div>
            </div>
            <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10 text-white text-sm z-30 animate-pulse-glow delay-700">
              <div className="font-bold">年产 20万吨</div>
              <div className="text-xs text-blue-200">稳定供应</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-slate-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* 2. 数据与优势板块 */}
      <section className="bg-slate-50 pb-20 pt-10 relative">
        <div className="container mx-auto px-4 relative -mt-24 z-20 reveal-on-scroll">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-600 hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 核心产品 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              核心产品体系
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              依托自主知识产权的羰基化合成技术，我们为全球客户提供具有竞争力的精细化学品。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 reveal-on-scroll"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`h-24 ${product.bgClass} relative overflow-hidden`}
                >
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full"></div>
                  <div className="absolute top-4 right-4 text-white/20">
                    <Factory className="w-12 h-12" />
                  </div>
                </div>

                <div
                  className={`absolute top-12 left-8 w-16 h-16 ${product.bgClass} rounded-xl shadow-lg flex items-center justify-center ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {getIcon(product.icon)}
                </div>

                <div className="pt-16 px-8 pb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-sm font-medium text-slate-400 mb-4">
                    {product.enName}
                  </div>

                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed min-h-[60px]">
                    {product.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/products"
                    className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-center gap-2 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200"
                  >
                    查看详情 <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            了解我们的应用案例
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
            看看元道分子的产品如何助力各行业客户提升产品性能。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/cases"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-xl"
            >
              浏览成功案例
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
