"use client";

import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { CASES } from "@/app/data/constants";

export default function CasesPage() {
  useScrollReveal();

  return (
    <>
      <div className="relative py-20 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/yordo.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">
            应用与案例
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
            见证我们的化学技术如何赋能客户，解决行业难题
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {CASES.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group reveal-on-scroll"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-2">
                    成效亮点
                  </div>
                  <ul className="space-y-2">
                    {item.result.map((res, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 合作LOGO墙 (模拟) */}
        <div className="mt-20 text-center reveal-on-scroll">
          <p className="text-slate-500 mb-8">深受全球行业领导者的信赖</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* 这里的 logo 仅为示意，实际应使用真实客户 Logo */}
            <div className="text-2xl font-black text-slate-800">
              KANSAI PAINT
            </div>
            <div className="text-2xl font-black text-slate-800">MITSUBISHI</div>
            <div className="text-2xl font-black text-slate-800">
              NIPPON PAINT
            </div>
            <div className="text-2xl font-black text-slate-800">PPG</div>
          </div>
        </div>
      </div>
    </>
  );
}